const withDefaultProps = <D,P>(defaultProps: D, props:P): P => {
    return { ...defaultProps, ...props };
  };

export default withDefaultProps;