# deno_document_dir

[![tag](https://img.shields.io/github/release/justjavac/deno_document_dir)](https://github.com/justjavac/deno_document_dir/releases)
[![Build Status](https://github.com/justjavac/deno_document_dir/workflows/ci/badge.svg?branch=master)](https://github.com/justjavac/deno_document_dir/actions)
[![license](https://img.shields.io/github/license/justjavac/deno_document_dir)](https://github.com/justjavac/deno_document_dir/blob/master/LICENSE)
[![](https://img.shields.io/badge/deno-v1.3-green.svg)](https://github.com/denoland/deno)

Returns the path to the user's document directory.

The returned value depends on the operating system and is either a string,
containing a value from the following table, or `null`.

|Platform | Value                  | Example                      |
| ------- | ---------------------- | ---------------------------- |
| Linux   | `XDG_DOCUMENTS_DIR`    | /home/justjavac/Documents    |
| macOS   | `$HOME`/Documents      | /Users/justjavac/Documents   |
| Windows | `{FOLDERID_Documents}` | C:\Users\justjavac\Documents |

## Usage

Requires `allow-env` permission.

Returns `null` if there is no applicable directory or if any other error occurs.

```ts
import documentDir from "https://deno.land/x/document_dir/mod.ts";

documentDir();
// Lin: "/home/justjavac/Documents"
// Mac: "/Users/justjavac/Documents"
// Win: "C:\Users\justjavac\Documents"
```

## License

[deno_document_dir](https://github.com/justjavac/deno_document_dir) is released under the MIT License. See the bundled [LICENSE](./LICENSE) file for details.
