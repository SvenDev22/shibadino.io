// Trading tier configuration
const TRADING_TIERS = [
  {
    min: 5000,
    max: Infinity,
    icon: "🐳",
    label: "Megalodon",
    message: "<br>MEGALODON JUST STRUCK!</br>",
    value: 500,
  },
  {
    min: 1000,
    max: 4999,
    icon: "🐋",
    label: "Whale",
    message: "<br>WHALE BUY SPOTTED!</br>",
    value: 100,
  },
  {
    min: 500,
    max: 999,
    icon: "🦈",
    label: "Shark",
    message: "<br>SHARK JUST ENTERED!</br>",
    value: 50,
  },
  {
    min: 200,
    max: 499,
    icon: "🐬",
    label: "Dolphin",
    message: "<br>DOLPHIN JOINED THE POD!</br>",
    value: 20,
  },
  {
    min: 50,
    max: 199,
    icon: "🐟",
    label: "Fish",
    message: "<br>FISH SPLASHED IN!</br>",
    value: 5,
  },
  {
    min: 0,
    max: 49,
    icon: "🐠",
    label: "Minnow",
    message: "<br>MINNOW JUST SWAM IN!</br>",
    value: 1,
  },
];

/**
 * Get trading tier info based on USD value
 * @param {number} usdValue - The USD value of the transaction
 * @returns {Object} Tier information including icon, label, and message
 */
export function getTradingTier(usdValue) {
  const tier = TRADING_TIERS.find(
    (t) => usdValue >= t.min && usdValue <= t.max,
  );
  return tier || TRADING_TIERS[TRADING_TIERS.length - 1]; // Default to minnow if not found
}

/**
 * Generate visual representation using repeated icons
 * @param {number} usdValue - The USD value of the transaction
 * @returns {string} String of repeated icons representing the value
 */
export function generateIconRepresentation(usdValue) {
  const tier = getTradingTier(usdValue);
  const iconCount = Math.floor(usdValue / tier.value);
  return tier.icon.repeat(Math.min(iconCount, 50)); // Limit to 50 icons for display purposes
}

/**
 * Get complete trading notification
 * @param {number} usdValue - The USD value of the transaction
 * @returns {Object} Complete notification object with all information
 */
export function getTradingNotification(usdValue) {
  const tier = getTradingTier(usdValue);
  const iconRepresentation = generateIconRepresentation(usdValue);

  return {
    value: usdValue,
    tier: tier.label,
    icon: tier.icon,
    message: tier.message,
    iconRepresentation: iconRepresentation,
    iconCount: Math.floor(usdValue / tier.value),
  };
}
