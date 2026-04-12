# Change Log

All notable changes to the "ForcePanda-SFDX" extension will be documented in this file.

## Release Timeline

- Release - 12 April 2026 - v2.0.0
- Release - 12 October 2023 - v1.2.0
- Release - 14 July 2023 - v1.1.0
- Initial release - 27 June 2023 - v1.0.0

## Detailed Changes

### v2.0.0 - Major Migration to SF CLI
**Date:** April 12, 2026

#### Breaking Changes (Migration to SF CLI)
- **SFDX CLI Deprecation:** All commands have been migrated from the deprecated SFDX CLI to the modern SF CLI
- All command syntax and flags have been updated to follow the new SF CLI patterns
- Requires latest Salesforce CLI to be installed on your system

#### Command Updates
| Old Command | New Command |
|---|---|
| `sfdx force:package:create` | `sf package create` |
| `sfdx force:package:version:create` | `sf package version create` |
| `sfdx force:package:delete` | `sf package delete` |
| `sfdx force:package:list` | `sf package list` |
| `sfdx force:package:version:list` | `sf package version list` |
| `sfdx force:package:version:create:report` | `sf package version create report` |
| `sfdx force:package:version:promote` | `sf package version promote` |
| `sfdx force:package:version:delete` | `sf package version delete` |
| `sfdx force:mdapi:deploy:report` | `sf project deploy report` |
| `sfdx force:source:retrieve` | `sf source retrieve` |
| `sfdx force:source:convert` | `sf source convert` |
| `sfdx force:mdapi:deploy` | `sf project deploy start` |
| `sfdx force:org:open` | `sf org open` |

#### Flag Changes
- `--packagetype` → `--package-type`
- `--nonamespace` → `--no-namespace`
- `--installationkeybypass` → `--installation-key-bypass`
- `--codecoverage` → `--code-coverage`
- `-d` → `--output-dir` (for convert commands)
- `-d` → `--metadata-dir` (for deploy commands)
- `-p` → `--path` (for org open commands)

#### Features
- All 16 commands fully migrated to SF CLI equivalents
- Maintained backward compatible extension structure
- Enhanced terminal handling for better user experience
- Improved error reporting

#### NOTE
Release updates can be found in the README file.
