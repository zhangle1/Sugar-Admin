package cn.sugarAdmin.boot.framework.apilog.config;


import cn.sugarAdmin.boot.framework.apilog.core.filter.ApiAccessLogFilter;
import cn.sugarAdmin.boot.framework.apilog.core.interceptor.ApiAccessLogInterceptor;
import cn.sugarAdmin.boot.framework.apilog.core.service.ApiAccessLogFrameworkService;
import cn.sugarAdmin.boot.framework.apilog.core.service.ApiAccessLogFrameworkServiceImpl;
import cn.sugarAdmin.boot.framework.apilog.core.service.ApiErrorLogFrameworkService;
import cn.sugarAdmin.boot.framework.apilog.core.service.ApiErrorLogFrameworkServiceImpl;
import cn.sugarAdmin.boot.framework.common.enums.WebFilterOrderEnum;
import cn.sugarAdmin.boot.framework.web.config.SugarWebAutoConfiguration;
import cn.sugarAdmin.boot.framework.web.config.WebProperties;
import cn.sugarAdmin.boot.module.infra.api.logger.ApiAccessLogApi;
import cn.sugarAdmin.boot.module.infra.api.logger.ApiErrorLogApi;
import jakarta.servlet.Filter;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.autoconfigure.AutoConfiguration;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@AutoConfiguration(after = SugarWebAutoConfiguration.class)
public class SugarApiLogAutoConfiguration implements WebMvcConfigurer {

    @Bean
    @SuppressWarnings("SpringJavaInjectionPointsAutowiringInspection")
    public ApiAccessLogFrameworkService apiAccessLogFrameworkService(ApiAccessLogApi apiAccessLogApi) {
        return new ApiAccessLogFrameworkServiceImpl(apiAccessLogApi);
    }

    @Bean
    @SuppressWarnings("SpringJavaInjectionPointsAutowiringInspection")
    public ApiErrorLogFrameworkService apiErrorLogFrameworkService(ApiErrorLogApi apiErrorLogApi) {
        return new ApiErrorLogFrameworkServiceImpl(apiErrorLogApi);
    }

    /**
     * 创建 ApiAccessLogFilter Bean，记录 API 请求日志
     */
    @Bean
    @ConditionalOnProperty(prefix = "sugar.access-log", value = "enable", matchIfMissing = true) // 允许使用 sugar.access-log.enable=false 禁用访问日志
    public FilterRegistrationBean<ApiAccessLogFilter> apiAccessLogFilter(WebProperties webProperties,
                                                                         @Value("${spring.application.name}") String applicationName,
                                                                         ApiAccessLogFrameworkService apiAccessLogFrameworkService) {
        ApiAccessLogFilter filter = new ApiAccessLogFilter(webProperties, applicationName, apiAccessLogFrameworkService);
        return createFilterBean(filter, WebFilterOrderEnum.API_ACCESS_LOG_FILTER);
    }

    private static <T extends Filter> FilterRegistrationBean<T> createFilterBean(T filter, Integer order) {
        FilterRegistrationBean<T> bean = new FilterRegistrationBean<>(filter);
        bean.setOrder(order);
        return bean;
    }

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(new ApiAccessLogInterceptor());
    }

}
