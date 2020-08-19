/** Returns the path to the user's document directory.
 *
 * The returned value depends on the operating system and is either a string,
 * containing a value from the following table, or `null`.
 * 
 * |Platform | Value                  | Example                      |
 * | ------- | ---------------------- | ---------------------------- |
 * | Linux   | `XDG_DOCUMENTS_DIR`    | /home/justjavac/Documents    |
 * | macOS   | `$HOME`/Documents      | /Users/justjavac/Documents   |
 * | Windows | `{FOLDERID_Documents}` | C:\Users\justjavac\Documents |
 */
export default function documentDir(): string | null {
  switch (Deno.build.os) {
    case "linux":
      return Deno.env.get("XDG_DOCUMENTS_DIR") ?? null;

    case "darwin":
      const home = Deno.env.get("HOME");
      if (home) return `${home}/Documents`;
      break;

    case "windows":
      return Deno.env.get("FOLDERID_Documents") ?? null;
  }

  return null;
}
