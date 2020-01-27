import React, { useState } from 'react';
import { FAB, Portal, Provider } from 'react-native-paper';
import commomStyles from '../../styles'

export const Button = ({ icons }) => {
  const [open, setOpen] = useState(false);
  return (
    <Provider>
      <Portal>
        <FAB.Group
          open={open}
          icon={open ? 'close' : 'plus'}
          actions={icons}
          fabStyle={{ backgroundColor: commomStyles.colors.secundary }}
          onStateChange={({ open }) => setOpen(open)}
          onPress={() => {
            if (open) {
              // do something if the speed dial is open
            }
          }}
        />
      </Portal>
    </Provider>
  );
}

export default Button