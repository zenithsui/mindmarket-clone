---
name: MindMarket clone structure
description: Extracted tokens, brand colors, downloaded assets, component breakdown, and all corrections applied for the MindMarket homepage clone.
---

## Color tokens
- Green: #8ED462  
- Charcoal: #2C2E2A  
- Yellow: #F5E211  
- Pink: #EBC1FF  
- Blue: #2BA0FF  
- Red: #FF705D  
- Beige: #F5F1E4  
- Beige dark: #E0DBCE  

## Asset locations
- Public images: `artifacts/mindmarket-clone/public/images/`
- Fonts: `artifacts/mindmarket-clone/public/fonts/`
- Key files: `hero-background-illustration.svg`, `esomar-3f96eb5c9c.png`, `1758761960-kais-website-photo.avif`, `1758762238-nydia-photo-website.avif`

## Component structure (App.tsx order)
Nav → Hero → Timeline → Callout → Stats → Articles → Brands → Footer

## Key corrections applied (vs prior broken state)
1. **Footer email**: `curious@mindmarket.com` (was: hello@mindmarket.com)
2. **Footer ESOMAR logo**: `/images/esomar-3f96eb5c9c.png` (was: NielsenIQ logo)
3. **Footer London address**: "3rd Floor, 86-90 Paul Street, London EC2A 4NE, UK"
4. **Stats**: Added description paragraph "These numbers are more than just milestones…"
5. **Articles**: Rebuilt as vertical cards (image top, tags overlaid, title below image). Desktop: 4-col grid, item 1 = 2col×2row (portrait 638/916), item 2 = 2col×1row.
6. **Callout section** (new): Green bg, "Ready when you are!", description, Get a quote button, 3 bullet points. Located between Timeline and Stats.
7. **Brands title**: "Brands that choose MindMarket". Rail 1: Discord, Paypal, Walmart, Moët & Chandon, Coinbase, Airbnb, Apple. Rail 2: Google, Youtube, Uber, Meta, Citizens Bank, American Express, Amazon, WhatsApp, NielsenIQ, HP, AnswerLab, Starbucks.
8. **Nav**: Added About Us, Insights, Contact to desktop menu; full methodology and sector dropdowns.
9. **Timeline tiles**: 4 tiles — red (Services), yellow (Methodology), blue (Industry Sectors), pink (Network). Full descriptions extracted from original HTML.

## Tile descriptions (from original HTML)
- Red "No more chaos.": "Managing multiple vendors, juggling time zones…"
- Yellow "One brief. One team.": "You brief us once and we take it from there…"
- Blue "Speak their language.": "From gaming to fintech, hospitality to consumer goods…"
- Pink "Global, for real.": "Whether you're researching one market or launching in ten…"

## Brand image filename map
- Apple: 1776187970-apple-logo.webp
- AnswerLab: 1758633805-logo-answerlab.png
- NielsenIQ: 1758633680-logo-nielseniq.png
- American Express: 1763465938-american-express.png
- Starbucks: 1763478625-starbucks-edited.png
- Discord: 1755458576-discord-icon-1.svg
- Citizens Bank: 1758633791-logo-citizens-bank.svg
