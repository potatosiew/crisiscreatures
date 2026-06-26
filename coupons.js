/* ── CRISIS CREATURES · COUPON CONFIG ──────────────────────────────────────
   Edit this file via admin.html or replace it with an exported copy.
   Supported types:  "free_shipping" | "percentage" | "fixed"
   ───────────────────────────────────────────────────────────────────────── */

var COUPON_CONFIG = {
  version: 1,
  updated: "2026-06-26",
  coupons: {
      "ACE2026": {
          "active": true,
          "type": "free_shipping",
          "label": "Free Shipping",
          "description": "Free shipping on your order"
      },
      "SOFTLAUNCH": {
          "active": true,
          "type": "percentage",
          "value": 10,
          "label": "10% Off",
          "description": "10% off your order"
      }
  }
};
