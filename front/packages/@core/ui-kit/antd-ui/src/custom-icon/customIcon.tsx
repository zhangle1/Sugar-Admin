import React from 'react';
import type { GetProps } from 'antd';
import Icon, { HomeOutlined } from '@ant-design/icons';

type CustomIconComponentProps = GetProps<typeof Icon>;

const PaletteSvg = () => (
  <svg
    t="1725006511425"
    class="icon"
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    p-id="4425"
    width="24"
    height="24"
  >
    <path
      d="M465.82784 960c-85.46816 0-198.26688-48.00512-273.50016-119.6544-93.79328-89.3184-127.19104-228.76672-127.19104-329.48224C65.13152 264.448 265.58464 64 512 64c246.42048 0 446.86848 200.448 446.86848 446.86336 0 64.47104-17.39776 114.36032-51.67104 148.2496-59.61216 59.008-154.83904 57.84576-238.6176 57.10848-76.81024-0.6656-127.74912 0.76288-135.45984 28.5696-4.57216 16.44544 0.09216 23.15776 20.34176 42.624 20.61824 19.7888 55.13216 52.89472 29.17888 110.58176-13.8496 30.81728-41.71776 51.09248-80.58368 58.71104-11.32544 2.21696-23.48544 3.29216-36.22912 3.29216zM512 123.58144c-213.54496 0-387.28704 173.7472-387.28704 387.28704 0 84.31104 28.48256 209.89952 108.69248 286.336 72.7296 69.23264 188.13952 114.59584 257.18272 101.02784 29.17888-5.69856 35.6096-19.97824 37.69856-24.66304 8.43776-18.70848 4.38784-23.50592-16.0512-43.15136-20.36736-19.52256-51.1232-49.01376-36.54656-101.5552 20.56704-74.07104 108.89728-73.088 193.49504-72.21248 72.35072 0.6144 154.1376 1.65888 196.11136-39.84896 22.87104-22.64064 33.98144-57.28768 33.98144-105.92768 0.00512-213.55008-173.73696-387.29216-387.2768-387.29216z"
      p-id="4426"
      fill="currentColor"
    ></path>
    <path
      d="M225.89952 608.35328c0 32.896 26.6752 59.58144 59.58144 59.58144 32.91136 0 59.58144-26.68544 59.58144-59.58144 0-32.91136-26.67008-59.58656-59.58144-59.58656-32.90112 0.00512-59.58144 26.68032-59.58144 59.58656zM254.98112 384.9216c0 32.90624 26.6752 59.58144 59.58144 59.58144 32.91136 0 59.58144-26.6752 59.58144-59.58144s-26.67008-59.58656-59.58144-59.58656c-32.90112 0-59.58144 26.68032-59.58144 59.58656zM430.2336 245.2736c0 32.90624 26.67008 59.58144 59.58144 59.58144 32.90624 0 59.58656-26.6752 59.58656-59.58144s-26.68032-59.58656-59.58656-59.58656c-32.91136 0.00512-59.58144 26.68544-59.58144 59.58656zM670.1824 325.33504c0 32.91136 26.67008 59.58656 59.58144 59.58656s59.58144-26.6752 59.58144-59.58656c0-32.90624-26.67008-59.58144-59.58144-59.58144s-59.58144 26.6752-59.58144 59.58144zM709.4784 512.04608c0 32.90624 26.68032 59.57632 59.59168 59.57632s59.58144-26.67008 59.58144-59.57632-26.67008-59.58656-59.58144-59.58656-59.59168 26.68032-59.59168 59.58656z"
      p-id="4427"
      fill="currentColor"
    ></path>
  </svg>
);

export const PaletteIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={PaletteSvg} {...props} />
);

const LayoutSvg = () => (
  <svg
    t="1725256010543"
    class="icon"
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    p-id="4276"
    width="24"
    height="24"
  >
    <path
      fill="currentColor"
      d="M781.69183326 208.63562012H242.36749291c-9.3092649 0-17.22930884 3.30743408-23.84417772 9.86792016-6.57531762 6.62475562-9.87780761 14.54479957-9.87780761 23.85406446v101.12640405h606.74853539V242.36254883c0-9.3092649-3.30743408-17.22930884-9.87780761-23.85406518-6.62475562-6.56048608-14.54479957-9.86792016-23.84417701-9.86791944h0.01977491z m33.70220971 573.04632568V410.87854004H444.59063721v404.50561547h337.08142114c9.29937744 0 17.22436547-3.30743408 23.844177-9.87780762 6.57531762-6.60992408 9.87780761-14.54479957 9.87780762-23.84417772v0.01977563z m-438.20782447 33.70220971v-404.50561548h-168.53576684v370.80340577c0 9.31420898 3.30249 17.26391602 9.87286353 23.82934546 6.61486816 6.61981225 14.53491211 9.89263916 23.84417772 9.89263917h134.81872559v-0.01977492zM242.34771729 141.21142578h539.32434106c27.89318824 0 51.74725342 9.87780761 71.50286865 29.62353539 19.74572778 19.75561523 29.61364722 43.58001733 29.61364722 71.48803711v539.33917189c0 27.89318824-9.86792016 51.73736596-29.61364722 71.4929812-19.75561523 19.75561523-43.60968041 29.63342286-71.50286865 29.63342285H242.34771729c-27.91296386 0-51.74725342-9.87780761-71.50286866-29.63342285C151.08923339 833.39953614 141.21142578 809.55041503 141.21142578 781.66217017V242.32794165C141.21142578 214.41497779 151.08923339 190.59057641 170.84484863 170.83496117 190.60046386 151.08923339 214.43475342 141.21142578 242.34771729 141.21142578z"
      p-id="4277"
    ></path>
  </svg>
);

export const LayoutIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={LayoutSvg} {...props} />
);

const SunThemeSvg = () => (
  <svg
    t="1725256607475"
    class="icon"
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    p-id="8057"
    width="24"
    height="24"
  >
    <path
      d="M510 192a32 32 0 0 1-32-32V80a32 32 0 1 1 64 0v80a32 32 0 0 1-32 32z m224.864 93.136a32 32 0 0 1 0-45.248l56.576-56.576a32 32 0 1 1 45.248 45.248l-56.56 56.56a32 32 0 0 1-45.264 0.016z m93.136 224.864a32 32 0 0 1 32-32h80a32 32 0 1 1 0 64h-80a32 32 0 0 1-32-32z m-93.136 224.864a32 32 0 0 1 45.248 0l56.56 56.56a32 32 0 1 1-45.248 45.248l-56.576-56.56a32 32 0 0 1 0.016-45.248zM510 828a32 32 0 0 1 32 32v80a32 32 0 1 1-64 0v-80a32 32 0 0 1 32-32z m-224.864-93.136a32 32 0 0 1 0 45.248l-56.56 56.56a32 32 0 0 1-45.248-45.248l56.576-56.56a32 32 0 0 1 45.232 0zM192 510a32 32 0 0 1-32 32H80a32 32 0 1 1 0-64h80a32 32 0 0 1 32 32z m93.136-224.864a32 32 0 0 1-45.248 0l-56.576-56.56a32 32 0 0 1 45.248-45.248l56.56 56.576a32 32 0 0 1 0.016 45.232zM510 272c132.544 0 240 107.456 240 240 0 132.544-107.456 240-240 240-132.544 0-240-107.456-240-240 0-132.544 107.456-240 240-240z m0 64c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176z"
      fill="currentColor"
      p-id="8058"
    ></path>
  </svg>
);

export const SunThemeIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={SunThemeSvg} {...props}></Icon>
);

const NightThemeSvg = () => (
<svg t="1725257162403" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9201" width="24" height="24"><path d="M455.95 906.51c-100.27 0-195.85-37.67-269.13-106.08a41.855 41.855 0 0 1-12.04-40.71 41.94 41.94 0 0 1 29.83-30.33C344.8 691.86 442.7 564.17 442.7 418.87c0-83.55-31.91-162.7-89.86-222.89a41.923 41.923 0 0 1-9.87-41.37c4.47-14.53 16.48-25.5 31.34-28.63 28.03-5.9 56.83-8.76 85.62-8.47 105.68 1.05 204.44 43.04 278.06 118.22C811.6 310.9 851.53 410.5 850.43 516.2c-1.09 104.5-42.61 202.57-116.91 276.14-74.35 73.63-172.93 114.17-277.58 114.17zM279.16 780.5c52.14 34.41 113.31 52.95 176.79 52.95 175.41 0 319.6-142.66 321.43-318.02 0.9-86.18-31.63-167.36-91.58-228.58-59.96-61.23-140.43-95.42-226.59-96.28-5.34-0.05-10.67 0.03-15.99 0.23 47.11 66.28 72.55 145.42 72.55 228.06 0 158.39-94.82 299.74-236.61 361.63z" fill="currentColor" p-id="9202"></path></svg>
);
export const NightThemeIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={NightThemeSvg} {...props}></Icon>
);