import { gql } from "@apollo/client";

export const GET_COUNTRIES = gql`
  query getAllCountries {
    countries {
      code
      name
      phone
      emoji
      capital
      currency
      continent {
        name
      }
      languages {
        name
      }
    }
  }
`;
