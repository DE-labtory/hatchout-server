import {HatchOutContract} from "../lib/types";
import HatchOut from "../lib/hatchOut";

async function main() {
  try {
    console.log('executing createEgg Transaction');
    const hatchOut = HatchOut.createFromConfig();
    const gene = process.argv[2];
    const owner = '0xDA46CE389670437Aeb5d4a0752B88cf2d4597A4e';
    const hatchOutContract: HatchOutContract = hatchOut
      .factory
      .createDefaultHatchOutContract();

    const signature = await hatchOut
      .utils
      .createGeneSignature(gene);

    const receipt = await hatchOutContract
      .methods
      .createEgg(gene, owner, signature);

    console.log(JSON.stringify(receipt, undefined, 2));
  } catch (e) {
    console.error(`failed to execute 'createEgg Transaction'\n`, e);
    process.exit(1);
  }
}

main();