import path from "path";
import { execFile } from "child_process";

interface IOpts {
  recursive?: boolean;
  deleteOriginal?: boolean;
}

const word2pdf = (
  source: string | null = null,
  output: string | null = null,
  options: IOpts = {
    recursive: false,
    deleteOriginal: false,
  }
) => {
  if (!source) return Promise.reject("Не поддерживаемый source.");
  if (!output) return Promise.reject("Не поддерживаемый output.");

  const args = ["-f", source, "-O", output, "-T", "wdFormatPDF"];
  const command = `${path.join(path.dirname(process.execPath), "/docto.exe")}`;
  if (options.recursive) args.push("-OX", ".pdf");
  if (options.deleteOriginal) args.push("-R", "true");

  return new Promise((resolve, reject) => {
    execFile(command, args, (error, stdout, stderr) => {
      if (error) reject({ error, stderr });
      resolve({ stdout });
    });
  });
};

export default word2pdf;
