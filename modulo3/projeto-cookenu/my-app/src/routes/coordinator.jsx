export const goToLogin = (navigate) => {
    navigate("/login");
  };
  
  export const goToSignUp = (navigate) => {
    navigate("/signup");
  };
  
  export const goToFeed = (navigate) => {
    navigate("/");
  };
  
  export const goToCreateRecipe = (navigate) => {
    navigate("/recipe/create");
  };
  
  export const goBack = (navigate) => {
    navigate(-1);
  };
  
  export const goToDetails = (navigate, id) => {
    navigate(`/recipe/${id}`);
  };
  