// if you comment here, the "type" prop in "FormKit" component will be work
declare module '@formkit/inputs' {
  interface FormKitInputProps<Props extends FormKitInputs<Props>> {
    customExample: {
      type: 'customExample';
    };
  }
}
