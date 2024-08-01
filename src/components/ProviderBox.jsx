import PropTypes from "prop-types";
import { Box } from "@mui/material";
import { ProviderBoxStyles } from "./styles";
import ProviderCredentials from "./ProviderCredentials";
import ProviderInformation from "./ProviderInformation";
import { StyledBoxContainer } from "./styles";

const ProviderBox = ({ providerData }) => {
  const {
    licenses,
    otherids,
    pac_id,
    taxonomies,
    groups,
    npi,
    provider_last_name_legal_name,
    provider_first_name,
    provider_credential_text,
    reval_specialty,
    grd_yr,
    provider_gender_code,
    provider_first_line_business_practice_location_address,
    provider_business_practice_location_address_city_name,
    provider_business_practice_location_address_state_name,
    provider_business_practice_location_address_postal_code,
    provider_business_practice_location_address_telephone_number,
  } = providerData ?? {};
  const providerRecentLocation = {
    address1: provider_first_line_business_practice_location_address,
    city: provider_business_practice_location_address_city_name,
    state: provider_business_practice_location_address_state_name,
    zipCode: provider_business_practice_location_address_postal_code,
  };

  return (
    <Box id="image" sx={ProviderBoxStyles}>
      <div
        style={{
          display: "flex",
          gap: 20,
          padding: 8,
        }}>
        <StyledBoxContainer>
          <ProviderInformation
            provider_last_name_legal_name={provider_last_name_legal_name}
            provider_first_name={provider_first_name}
            provider_credential_text={provider_credential_text}
            reval_specialty={reval_specialty}
            grd_yr={grd_yr}
            provider_business_practice_location_address_telephone_number={
              provider_business_practice_location_address_telephone_number
            }
            providerRecentLocation={providerRecentLocation}
            provider_gender_code={provider_gender_code}
          />
          <ProviderCredentials
            licenses={licenses}
            otherids={otherids}
            pac_id={pac_id}
            npi={npi}
            taxonomies={taxonomies}
            groups={groups}
          />
        </StyledBoxContainer>
      </div>
    </Box>
  );
};

ProviderBox.propTypes = {
  providerData: PropTypes.object,
};

export default ProviderBox;
