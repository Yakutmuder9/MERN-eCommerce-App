import { Box, useStyleConfig } from "@chakra-ui/react";

const PanelContainer = (props) => {
  const { variant, children, ...rest } = props;
  const styles = useStyleConfig("PanelContainer", { variant });

  return (
    <Box __css={styles} {...rest}>
      {children}
    </Box>
  );
};

export default PanelContainer;
