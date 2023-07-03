import * as yup from 'yup';

export const workValidationSchema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string(),
  organization_id: yup.string().nullable(),
  user_id: yup.string().nullable(),
});
