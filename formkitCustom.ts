import { FormKitInputs } from '@formkit/inputs'

// if you comment here, the "type" prop in "FormKit" component will be work
declare module '@formkit/inputs' {
  interface FormKitInputProps<Props extends FormKitInputs<Props>> {
    'custom-example': {
      type: 'custom-example';
      testId: string;
      value?: string;
    };
  }
}
