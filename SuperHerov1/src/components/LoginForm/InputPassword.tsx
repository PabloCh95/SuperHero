import React, {useState} from 'react';
import {Text, StyleSheet} from 'react-native';
import {Input, Icon} from 'react-native-elements';

export const InputPassword = (props: any) => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    field: {name, onBlur, onChange, value},
    form: {errors, touched, setFieldTouched},
    ...inputProps
  } = props;

  const hasError = errors[name] && touched[name];

  return (
    <>
      <Input
        style={[
          styles.textInput,
          props.multiline && {height: props.numberOfLines * 40},
          hasError && styles.errorInput,
        ]}
        containerStyle={styles.inputForm}
        inputContainerStyle={styles.inputContainerStyle}
        value={value}
        onChangeText={text => onChange(name)(text)}
        onBlur={() => {
          setFieldTouched(name);
          onBlur(name);
        }}
        password={true}
        secureTextEntry={showPassword ? false : true}
        rightIcon={
          <Icon
            type="material-community"
            name={showPassword ? 'eye-off-outline' : 'eye-outline'}
            iconStyle={styles.iconRight}
            onPress={() => setShowPassword(!showPassword)}
          />
        }
        {...inputProps}
      />
      {hasError && <Text style={styles.errorText}>{errors[name]}</Text>}
    </>
  );
};

const styles = StyleSheet.create({
  textInput: {
    width: '100%',
    color: 'orange',
  },
  inputForm: {
    width: '100%',
    marginTop: 20,
  },
  errorText: {
    fontSize: 12,
    color: 'orange',
  },
  errorInput: {
    borderColor: 'red',
  },
  iconRight: {
    color: 'orange',
  },
  inputContainerStyle: {
    borderColor: 'orange',
  },
});

export default InputPassword;
