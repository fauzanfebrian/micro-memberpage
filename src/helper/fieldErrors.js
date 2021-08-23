const fieldErrors = (errors) => {
  const fieldErrors =
    typeof errors === "object"
      ? errors?.reduce((listErrors, error) => {
          if (error?.field) listErrors[error?.field] = error;
          console.log("reduce", listErrors);
          return listErrors;
        }, {})
      : { email: { message: errors } };

  return fieldErrors;
};

export default fieldErrors;
