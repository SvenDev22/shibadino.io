// Trading tier configuration
const TRADING_TIERS = [
  {
    min: 5000,
    max: Infinity,
    icon: "🐳",
    label: "Megalodon",
    message: "<b>MEGALODON JUST STRUCK!</b>",
    value: 500,
  },
  {
    min: 1000,
    max: 4999,
    icon: "🐋",
    label: "Whale",
    message: "<b>WHALE BUY SPOTTED!</b>",
    value: 100,
  },
  {
    min: 500,
    max: 999,
    icon: "🦈",
    label: "Shark",
    message: "<b>SHARK JUST ENTERED!</b>",
    value: 50,
  },
  {
    min: 200,
    max: 499,
    icon: "🐬",
    label: "Dolphin",
    message: "<b>DOLPHIN JOINED THE POD!</b>",
    value: 20,
  },
  {
    min: 50,
    max: 199,
    icon: "🐟",
    label: "Fish",
    message: "<b>FISH SPLASHED IN!</b>",
    value: 5,
  },
  {
    min: 0,
    max: 49,
    icon: "🐠",
    label: "Minnow",
    message: "<b>MINNOW JUST SWAM IN!</b>",
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
