import PropTypes from "prop-types";
import { Divider, List, ListItem, ListItemText } from "@mui/material";

const ProviderCredentials = ({
  licenses = [],
  otherids = [],
  pac_id = "",
  npi = "",
  taxonomies = [],
  groups = [],
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "50%",
        paddingTop: 0,
        paddingRight: 50,
      }}>
      {/* ====== LICENSES SECTION ====== */}
      <h2>{`NPI: ${npi || "123456789"}`}</h2>
      <h3 style={{ margin: 0, padding: 0 }}>Licenses:</h3>
      <List>
        {licenses.length === 0
          ? "Not Available"
          : licenses.map((singleLic) => (
              <ListItem key={singleLic.license} sx={{ p: 0, m: 0 }}>
                <ListItemText
                  primary={`${singleLic.license}`}
                  secondary={`${singleLic.timeRange}, ${singleLic.issuingState}`}
                  sx={{ p: 0, m: 0 }}
                />
              </ListItem>
            ))}
      </List>
      <Divider />
      {/* ====== OTHER IDs SECTION ====== */}
      <h3 style={{ marginBottom: 0, padding: 0 }}>Other IDs:</h3>
      <List>
        {otherids.map((otherid) => (
          <ListItem key={otherid.id} sx={{ p: 0, m: 0 }}>
            <ListItemText
              primary={`${otherid.type}: ${otherid.id}`}
              secondary={`${otherid.timeRange}, ${otherid.issuingState}`}
              sx={{ p: 0, m: 0 }}
            />
          </ListItem>
        ))}
        <ListItem sx={{ pl: 0 }}>
          <ListItemText>{`PAC-ID: ${pac_id || "Not Available"}`}</ListItemText>
        </ListItem>
      </List>
      <Divider />
      {/* ====== TAXONOMIES SECTION ====== */}
      <h3 style={{ marginBottom: 0, padding: 0 }}>Taxonomies:</h3>
      <List>
        {taxonomies.length === 0
          ? "Not Available"
          : taxonomies.map((taxonomy) => (
              <ListItem key={taxonomy.code} sx={{ p: 0, m: 0 }}>
                <ListItemText
                  primary={`${taxonomy.description}: ${taxonomy.code}`}
                  secondary={`${taxonomy.timeRange} - ${taxonomy.isPrimary}`}
                  sx={{ p: 0, m: 0 }}
                />
              </ListItem>
            ))}
      </List>
      <Divider />
      {/* ====== GROUPS SECTION ====== */}
      <h3 style={{ marginBottom: 0, padding: 0 }}>Groups:</h3>
      <List>
        {groups.length === 0
          ? "Not Available"
          : groups.map((taxonomy) => (
              <ListItem key={taxonomy.npi} sx={{ p: 0, m: 0 }}>
                <ListItemText
                  primary={`${taxonomy.name}`}
                  secondary={`NPI: ${taxonomy.npi}`}
                  sx={{ p: 0, m: 0 }}
                />
              </ListItem>
            ))}
      </List>
    </div>
  );
};

ProviderCredentials.propTypes = {
  licenses: PropTypes.array,
  otherids: PropTypes.array,
  pac_id: PropTypes.string,
  taxonomies: PropTypes.array,
  groups: PropTypes.array,
  npi: PropTypes.string,
};

export default ProviderCredentials;
