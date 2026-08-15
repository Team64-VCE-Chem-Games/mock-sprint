# Requirements: Team Page & Login Styling

**Project:** Mock Sprint — Team 64, VCE Chemistry Games
**Author:** Madi Powell, s4092777
**Date:** 10 Aug 2026
**Status:** Approved
**Design reference:** https://www.figma.com/design/SdrndPt1UdUtfMzLJ6HWFf/Mock-Sprint--Copy-?node-id=0-1

## Purpose
To define the content and display rules for the team page. 
The login task is a visual restyle only changes to authentication logic or session behaviour should not occur.

## Team page fields
The page displays the 5 team members. Each member card should show:
| Data | Required | Display rules |
|------|----------|---------------|
| Name | Yes | Main heading on the card. |
| Photo | Yes, with a fallback display | Clear headshot. If it fails to load, show a placeholder image instead. |
| Role | Yes | Secondary label under the name. |
| Blurb | Yes | Short bio. Length is not fixed. |

## In Scope
- A team page displaying all 5 members with name, photo, role, and blurb
- Data in a single typed source so content can be edited without touching code
- A reusable card so every member renders consistently

## Out of Scope
- Any change to authentication logic: credential checking and password rules
- Skills tags, social links, and contact details on member cards
- Final photo and blurb content, which is supplied separately;


## Acceptance criteria
- All 5 members render with name, photo, role, and blurb
- The member without a headshot shows a placeholder avatar
- Login page matches the approved design
