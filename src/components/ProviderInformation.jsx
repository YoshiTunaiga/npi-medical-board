import { Avatar } from "@mui/material";
import PropTypes from "prop-types";

const ProviderInformation = ({
  provider_last_name_legal_name = "",
  provider_first_name = "",
  provider_credential_text = "",
  reval_specialty = "",
  grd_yr = 0,
  provider_business_practice_location_address_telephone_number = "",
  providerRecentLocation = {},
  provider_gender_code = "",
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        width: "50%",
      }}>
      <Avatar sx={{ marginLeft: 8, width: 150, height: 150 }} />
      <h1 style={{ marginBottom: 0, padding: 0 }}>{`${
        provider_first_name || "First Name"
      } ${provider_last_name_legal_name || "Last Name"}, ${
        provider_credential_text || "MD"
      }`}</h1>
      <h3 style={{ margin: 0, padding: 0 }}>
        Specialty:{" "}
        <span style={{ fontWeight: 400 }}>
          {reval_specialty || "Family Practice"}
        </span>
      </h3>
      <h3 style={{ margin: 0, padding: 0 }}>
        Medical School:{" "}
        <span style={{ fontWeight: 400 }}>{grd_yr || "2001"}</span>
      </h3>
      <h4 style={{ margin: 0, padding: 0 }}>
        Entity Type:{" "}
        <span style={{ fontWeight: 400 }}>
          <em>{`Individual (Gender: ${provider_gender_code || "F"})`}</em>
        </span>
      </h4>
      <div>
        <h4 style={{ marginBottom: 0, padding: 0 }}>
          Most Recent Business Location
        </h4>
        <p
          style={{
            margin: 0,
            padding: 0,
          }}>{`${providerRecentLocation.address1 || "1 Somewhere St"}`}</p>
        <p style={{ margin: 0, padding: 0 }}>{`${
          providerRecentLocation.city || "Orlando"
        }, ${providerRecentLocation.state || "FL"} ${
          providerRecentLocation.zipCode || "12345"
        }`}</p>
        <p
          style={{
            margin: 0,
            padding: 0,
          }}>{`Telephone Number: ${
          provider_business_practice_location_address_telephone_number ||
          "1234567890"
        }`}</p>
      </div>
    </div>
  );
};

ProviderInformation.propTypes = {
  provider_last_name_legal_name: PropTypes.string,
  provider_first_name: PropTypes.string,
  provider_credential_text: PropTypes.string,
  reval_specialty: PropTypes.string,
  grd_yr: PropTypes.number,
  provider_gender_code: PropTypes.string,
  provider_business_practice_location_address_telephone_number:
    PropTypes.string,
  providerRecentLocation: PropTypes.shape({
    address1: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
    zipCode: PropTypes.string,
  }),
};

export default ProviderInformation;
