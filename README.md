## English to Nepali Converter (Unicode)

Convert Romanized English text and/or ASCII digits to Nepali Unicode. Works in plain JavaScript, Node.js, and any frontend framework (React, Vue, Angular, Svelte, etc.).

Examples:
- "Namaste Nepal 2079" → "नमस्ते नेपाल २०७९"
- "Rs 100.50" → "Rs १००.५०" (digits only)

Note: Full transliteration from Romanized English to Nepali is rule-based and project-specific. This README provides a ready-to-use skeleton with digit conversion out of the box, and a clear extension point to plug in your own transliteration map/rules.

### Features
- Converts ASCII digits 0-9 to Nepali digits ०-९
- Lightweight, framework-agnostic, no dependencies
- Pluggable transliteration rules for characters/phonetics (e.g., "ka" → "क")
