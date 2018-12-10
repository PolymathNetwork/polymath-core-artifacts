import * as fs from 'fs';
import * as path from 'path';

class Artifact {
  public content: string;

  constructor(file: string) {
    this.content = file;
  }

  public abi(): any {
    return JSON.parse(this.content).abi;
  }
}

class PolymathRegistry {
  private artifact: any;

  constructor() {
    this.artifact = JSON.parse(getContract('PolymathRegistry').content);
  }

  public network(id: number): number {
    return this.artifact.networks[id].address;
  }
}

function getContract(contractName: string): Artifact {
  const file: string = fs.readFileSync(path.resolve(__dirname, `../contracts/${contractName}.json`)).toString();
  return new Artifact(file);
}

function polymathRegistry(): PolymathRegistry {
  return new PolymathRegistry();
}

export const load = (contractName: string) => getContract(contractName);
export const registry = () => polymathRegistry();
