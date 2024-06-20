/**
 * Handles generation of a license badge link if license is provided.
 * @param {string} license
 * @returns {string} Corresponding license badge as a string, empty if no license provided
 */
function renderLicenseBadge(license) {
  license ? renderLicenseBadge : "";
}


/**
 * Returns license badge link.
 * @param {string} license
 * @returns {string} License badge link as a string
 */
function renderLicenseLink(license) {

}

/**
 * Returns the license section of README.
 * @param {string} license
 * @returns {string} License section of README, empty if no license provided
 */
function renderLicenseSection(license) {

}

/**
 * Generates markdown for README.
 * @param 
 * @returns
 */
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
