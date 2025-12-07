import { Text, View } from 'react-native';
import { Dialog } from '@rneui/themed';
import { Button } from '@rneui/base';
import { styles } from '../theme/theme';

export default function ErrorModal({
  visible,
  onClose,
}) {
  return (
    <Dialog
      isVisible={visible}
      onBackdropPress={onClose}
    >
      <Dialog.Title title='Error' />
      <Text style={styles.textDialog}>
        Something went wrong. Fetching movies
        failed.
      </Text>
      <View style={styles.buttonContainerDialog}>
        <Button
          title='OK'
          onPress={onClose}
          type='clear'
          titleStyle={styles.buttonOkStyle}
        />
      </View>
    </Dialog>
  );
}
