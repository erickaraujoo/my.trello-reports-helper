import * as yup from "yup";

export const validateIdParams = async (id: number) => {
  const schema = yup.object().shape({
    id: yup.number().required("Campo deve ser número"),
  });

  await schema.validate(id, { abortEarly: false });
};
