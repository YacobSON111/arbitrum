/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from 'ethers'
import { Provider, TransactionRequest } from '@ethersproject/providers'
import { Contract, ContractFactory, Overrides } from '@ethersproject/contracts'

import type { StandardArbERC20 } from '../StandardArbERC20'

export class StandardArbERC20__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer)
  }

  deploy(overrides?: Overrides): Promise<StandardArbERC20> {
    return super.deploy(overrides || {}) as Promise<StandardArbERC20>
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {})
  }
  attach(address: string): StandardArbERC20 {
    return super.attach(address) as StandardArbERC20
  }
  connect(signer: Signer): StandardArbERC20__factory {
    return super.connect(signer) as StandardArbERC20__factory
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): StandardArbERC20 {
    return new Contract(address, _abi, signerOrProvider) as StandardArbERC20
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'Approval',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
    ],
    name: 'Transfer',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'Transfer',
    type: 'event',
  },
  {
    inputs: [],
    name: 'DOMAIN_SEPARATOR',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
    ],
    name: 'allowance',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'approve',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'balanceOf',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'bridge',
    outputs: [
      {
        internalType: 'contract ArbTokenBridge',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'bridgeBurn',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_l1Address',
        type: 'address',
      },
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'bridgeInit',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'bridgeMint',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'decimals',
    outputs: [
      {
        internalType: 'uint8',
        name: '',
        type: 'uint8',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'subtractedValue',
        type: 'uint256',
      },
    ],
    name: 'decreaseAllowance',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'addedValue',
        type: 'uint256',
      },
    ],
    name: 'increaseAllowance',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'name',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'symbol',
        type: 'string',
      },
      {
        internalType: 'uint8',
        name: 'decimals',
        type: 'uint8',
      },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'isMaster',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'l1Address',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'migrate',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'name',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
    ],
    name: 'nonces',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'deadline',
        type: 'uint256',
      },
      {
        internalType: 'uint8',
        name: 'v',
        type: 'uint8',
      },
      {
        internalType: 'bytes32',
        name: 'r',
        type: 'bytes32',
      },
      {
        internalType: 'bytes32',
        name: 's',
        type: 'bytes32',
      },
    ],
    name: 'permit',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'symbol',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'totalSupply',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'recipient',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'transfer',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_value',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'transferAndCall',
    outputs: [
      {
        internalType: 'bool',
        name: 'success',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'recipient',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'transferFrom',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'withdraw',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
]

const _bytecode =
  '0x608060405234801561001057600080fd5b5060cc805460ff191660011790556125d38061002d6000396000f3fe608060405234801561001057600080fd5b50600436106101585760003560e01c806374f4f547116100c3578063ad68ebf71161007c578063ad68ebf714610665578063c2eeeebd14610691578063d505accf146106b5578063dd62ed3e14610706578063e78cea9214610734578063f3fef3a31461073c57610158565b806374f4f547146105875780637ecebe00146105b35780638c2a993e146105d957806395d89b4114610605578063a457c2d71461060d578063a9059cbb1461063957610158565b8063313ce56711610115578063313ce5671461044e5780633644e5151461046c57806339509351146104745780634000aea0146104a05780636f791d291461055957806370a082311461056157610158565b806306fdde031461015d578063095ea7b3146101da5780631624f6c61461021a57806318160ddd1461034a578063189db7d21461036457806323b872dd14610418575b600080fd5b610165610768565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561019f578181015183820152602001610187565b50505050905090810190601f1680156101cc5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b610206600480360360408110156101f057600080fd5b506001600160a01b0381351690602001356107ff565b604080519115158252519081900360200190f35b6103486004803603606081101561023057600080fd5b810190602081018135600160201b81111561024a57600080fd5b82018360208201111561025c57600080fd5b803590602001918460018302840111600160201b8311171561027d57600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295949360208101935035915050600160201b8111156102cf57600080fd5b8201836020820111156102e157600080fd5b803590602001918460018302840111600160201b8311171561030257600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295505050903560ff16915061081d9050565b005b6103526108de565b60408051918252519081900360200190f35b6103486004803603604081101561037a57600080fd5b6001600160a01b038235169190810190604081016020820135600160201b8111156103a457600080fd5b8201836020820111156103b657600080fd5b803590602001918460018302840111600160201b831117156103d757600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506108e4945050505050565b6102066004803603606081101561042e57600080fd5b506001600160a01b03813581169160208101359091169060400135610bd4565b610456610c61565b6040805160ff9092168252519081900360200190f35b610352610c6a565b6102066004803603604081101561048a57600080fd5b506001600160a01b038135169060200135610c79565b610206600480360360608110156104b657600080fd5b6001600160a01b0382351691602081013591810190606081016040820135600160201b8111156104e557600080fd5b8201836020820111156104f757600080fd5b803590602001918460018302840111600160201b8311171561051857600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610ccd945050505050565b610206610da8565b6103526004803603602081101561057757600080fd5b50356001600160a01b0316610db1565b6103486004803603604081101561059d57600080fd5b506001600160a01b038135169060200135610dd0565b610352600480360360208110156105c957600080fd5b50356001600160a01b0316610e30565b610348600480360360408110156105ef57600080fd5b506001600160a01b038135169060200135610e51565b610165610ead565b6102066004803603604081101561062357600080fd5b506001600160a01b038135169060200135610f0e565b6102066004803603604081101561064f57600080fd5b506001600160a01b038135169060200135610f7c565b6103486004803603604081101561067b57600080fd5b506001600160a01b038135169060200135610f90565b610699611018565b604080516001600160a01b039092168252519081900360200190f35b610348600480360360e08110156106cb57600080fd5b506001600160a01b03813581169160208101359091169060408101359060608101359060ff6080820135169060a08101359060c00135611027565b6103526004803603604081101561071c57600080fd5b506001600160a01b03813581169160200135166111bf565b6106996111ea565b6103486004803603604081101561075257600080fd5b506001600160a01b0381351690602001356111fe565b60368054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156107f45780601f106107c9576101008083540402835291602001916107f4565b820191906000526020600020905b8154815290600101906020018083116107d757829003601f168201915b505050505090505b90565b600061081361080c611295565b8484611299565b5060015b92915050565b600054610100900460ff16806108365750610836611385565b80610844575060005460ff16155b61087f5760405162461bcd60e51b815260040180806020018281038252602e815260200180612425602e913960400191505060405180910390fd5b600054610100900460ff161580156108aa576000805460ff1961ff0019909116610100171660011790555b6108b384611396565b6108bd848461146c565b6108c682611522565b80156108d8576000805461ff00191690555b50505050565b60355490565b60cd546001600160a01b031615610933576040805162461bcd60e51b815260206004820152600e60248201526d105b1c9958591e481a5b9a5d195960921b604482015290519081900360640190fd5b60cc8054610100600160a81b031916336101000217905560cd80546001600160a01b0319166001600160a01b03841617905580516060908190819060208501908281101561098057600080fd5b8101908080516040519392919084600160201b82111561099f57600080fd5b9083019060208201858111156109b457600080fd5b8251600160201b8111828201881017156109cd57600080fd5b82525081516020918201929091019080838360005b838110156109fa5781810151838201526020016109e2565b50505050905090810190601f168015610a275780820380516001836020036101000a031916815260200191505b5060405260200180516040519392919084600160201b821115610a4957600080fd5b908301906020820185811115610a5e57600080fd5b8251600160201b811182820188101715610a7757600080fd5b82525081516020918201929091019080838360005b83811015610aa4578181015183820152602001610a8c565b50505050905090810190601f168015610ad15780820380516001836020036101000a031916815260200191505b5060405260200180516040519392919084600160201b821115610af357600080fd5b908301906020820185811115610b0857600080fd5b8251600160201b811182820188101715610b2157600080fd5b82525081516020918201929091019080838360005b83811015610b4e578181015183820152602001610b36565b50505050905090810190601f168015610b7b5780820380516001836020036101000a031916815260200191505b50604052505050925092509250610bcd610ba48460405180602001604052806000815250611538565b610bbd8460405180602001604052806000815250611538565b610bc884601261163f565b61081d565b5050505050565b6000610be1848484611670565b610c5784610bed611295565b610c52856040518060600160405280602881526020016124c7602891396001600160a01b038a16600090815260346020526040812090610c2b611295565b6001600160a01b03168152602081019190915260400160002054919063ffffffff6117c716565b611299565b5060019392505050565b60385460ff1690565b6000610c7461185e565b905090565b6000610813610c86611295565b84610c528560346000610c97611295565b6001600160a01b03908116825260208083019390935260409182016000908120918c16815292529020549063ffffffff61189116565b6000610cd98484610f7c565b50836001600160a01b0316336001600160a01b03167fe19260aff97b920c7df27010903aeb9c8d2be5d310a2c67824cf3f15396e4c1685856040518083815260200180602001828103825283818151815260200191508051906020019080838360005b83811015610d54578181015183820152602001610d3c565b50505050905090810190601f168015610d815780820380516001836020036101000a031916815260200191505b50935050505060405180910390a3610d98846118f2565b15610c5757610c578484846118f8565b60cc5460ff1690565b6001600160a01b0381166000908152603360205260409020545b919050565b60cc5461010090046001600160a01b03163314610e22576040805162461bcd60e51b815260206004820152600b60248201526a4f4e4c595f42524944474560a81b604482015290519081900360640190fd5b610e2c82826119d2565b5050565b6001600160a01b038116600090815260996020526040812061081790611ac8565b60cc5461010090046001600160a01b03163314610ea3576040805162461bcd60e51b815260206004820152600b60248201526a4f4e4c595f42524944474560a81b604482015290519081900360640190fd5b610e2c8282611acc565b60378054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156107f45780601f106107c9576101008083540402835291602001916107f4565b6000610813610f1b611295565b84610c52856040518060600160405280602581526020016125796025913960346000610f45611295565b6001600160a01b03908116825260208083019390935260409182016000908120918d1681529252902054919063ffffffff6117c716565b6000610813610f89611295565b8484611670565b60cc5460cd5460408051630d3f3fc360e21b81526001600160a01b0392831660048201523360248201528583166044820152606481018590529051610100909304909116916334fcff0c9160848082019260009290919082900301818387803b158015610ffc57600080fd5b505af1158015611010573d6000803e3d6000fd5b505050505050565b60cd546001600160a01b031681565b8342111561107c576040805162461bcd60e51b815260206004820152601d60248201527f45524332305065726d69743a206578706972656420646561646c696e65000000604482015290519081900360640190fd5b6000609a548888886110b1609960008e6001600160a01b03166001600160a01b03168152602001908152602001600020611ac8565b604080516020808201979097526001600160a01b0395861681830152939094166060840152608083019190915260a082015260c08082018990528251808303909101815260e090910190915280519101209050600061110f82611bb8565b9050600061111f82878787611c04565b9050896001600160a01b0316816001600160a01b031614611187576040805162461bcd60e51b815260206004820152601e60248201527f45524332305065726d69743a20696e76616c6964207369676e61747572650000604482015290519081900360640190fd5b6001600160a01b038a1660009081526099602052604090206111a890611d6f565b6111b38a8a8a611299565b50505050505050505050565b6001600160a01b03918216600090815260346020908152604080832093909416825291909152205490565b60cc5461010090046001600160a01b031681565b60cc5460cd5460408051630b620b8160e01b81526001600160a01b039283166004820152336024820152858316604482015260648101859052905161010090930490911691630b620b81916084808201926020929091908290030181600087803b15801561126b57600080fd5b505af115801561127f573d6000803e3d6000fd5b505050506040513d60208110156108d857600080fd5b3390565b6001600160a01b0383166112de5760405162461bcd60e51b81526004018080602001828103825260248152602001806125556024913960400191505060405180910390fd5b6001600160a01b0382166113235760405162461bcd60e51b81526004018080602001828103825260228152602001806123696022913960400191505060405180910390fd5b6001600160a01b03808416600081815260346020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b6000611390306118f2565b15905090565b600054610100900460ff16806113af57506113af611385565b806113bd575060005460ff16155b6113f85760405162461bcd60e51b815260040180806020018281038252602e815260200180612425602e913960400191505060405180910390fd5b600054610100900460ff16158015611423576000805460ff1961ff0019909116610100171660011790555b61142b611d78565b61144e82604051806040016040528060018152602001603160f81b815250611e1a565b61145782611eda565b8015610e2c576000805461ff00191690555050565b600054610100900460ff16806114855750611485611385565b80611493575060005460ff16155b6114ce5760405162461bcd60e51b815260040180806020018281038252602e815260200180612425602e913960400191505060405180910390fd5b600054610100900460ff161580156114f9576000805460ff1961ff0019909116610100171660011790555b611501611d78565b61150b8383611f97565b801561151d576000805461ff00191690555b505050565b6038805460ff191660ff92909216919091179055565b606082516000141561154b575080610817565b8251602014156115755761156e61156984600063ffffffff61206f16565b6120c8565b9050610817565b82806020019051602081101561158a57600080fd5b8101908080516040519392919084600160201b8211156115a957600080fd5b9083019060208201858111156115be57600080fd5b8251600160201b8111828201881017156115d757600080fd5b82525081516020918201929091019080838360005b838110156116045781810151838201526020016115ec565b50505050905090810190601f1680156116315780820380516001836020036101000a031916815260200191505b506040525050509050610817565b6000825160001415611652575080610817565b82806020019051602081101561166757600080fd5b50519050610817565b6001600160a01b0383166116b55760405162461bcd60e51b81526004018080602001828103825260258152602001806125306025913960400191505060405180910390fd5b6001600160a01b0382166116fa5760405162461bcd60e51b81526004018080602001828103825260238152602001806123246023913960400191505060405180910390fd5b61170583838361151d565b6117488160405180606001604052806026815260200161238b602691396001600160a01b038616600090815260336020526040902054919063ffffffff6117c716565b6001600160a01b03808516600090815260336020526040808220939093559084168152205461177d908263ffffffff61189116565b6001600160a01b0380841660008181526033602090815260409182902094909455805185815290519193928716926000805160206124ef83398151915292918290030190a3505050565b600081848411156118565760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561181b578181015183820152602001611803565b50505050905090810190601f1680156118485780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b6000610c7460405180806124756052913960520190506040518091039020611884612197565b61188c61219d565b6121a3565b6000828201838110156118eb576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b3b151590565b604051635260769b60e11b815233600482018181526024830185905260606044840190815284516064850152845187946001600160a01b0386169463a4c0ed369490938993899360840190602085019080838360005b8381101561196657818101518382015260200161194e565b50505050905090810190601f1680156119935780820380516001836020036101000a031916815260200191505b50945050505050600060405180830381600087803b1580156119b457600080fd5b505af11580156119c8573d6000803e3d6000fd5b5050505050505050565b6001600160a01b038216611a175760405162461bcd60e51b815260040180806020018281038252602181526020018061250f6021913960400191505060405180910390fd5b611a238260008361151d565b611a6681604051806060016040528060228152602001612347602291396001600160a01b038516600090815260336020526040902054919063ffffffff6117c716565b6001600160a01b038316600090815260336020526040902055603554611a92908263ffffffff6121f916565b6035556040805182815290516000916001600160a01b038516916000805160206124ef8339815191529181900360200190a35050565b5490565b6001600160a01b038216611b27576040805162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b611b336000838361151d565b603554611b46908263ffffffff61189116565b6035556001600160a01b038216600090815260336020526040902054611b72908263ffffffff61189116565b6001600160a01b03831660008181526033602090815260408083209490945583518581529351929391926000805160206124ef8339815191529281900390910190a35050565b6000611bc261185e565b82604051602001808061190160f01b81525060020183815260200182815260200192505050604051602081830303815290604052805190602001209050919050565b60006fa2a8918ca85bafe22016d0b997e4df60600160ff1b03821115611c5b5760405162461bcd60e51b81526004018080602001828103825260228152602001806123b16022913960400191505060405180910390fd5b8360ff16601b1480611c7057508360ff16601c145b611cab5760405162461bcd60e51b81526004018080602001828103825260228152602001806124536022913960400191505060405180910390fd5b604080516000808252602080830180855289905260ff88168385015260608301879052608083018690529251909260019260a080820193601f1981019281900390910190855afa158015611d03573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116611d66576040805162461bcd60e51b815260206004820152601860248201527745434453413a20696e76616c6964207369676e617475726560401b604482015290519081900360640190fd5b95945050505050565b80546001019055565b600054610100900460ff1680611d915750611d91611385565b80611d9f575060005460ff16155b611dda5760405162461bcd60e51b815260040180806020018281038252602e815260200180612425602e913960400191505060405180910390fd5b600054610100900460ff16158015611e05576000805460ff1961ff0019909116610100171660011790555b8015611e17576000805461ff00191690555b50565b600054610100900460ff1680611e335750611e33611385565b80611e41575060005460ff16155b611e7c5760405162461bcd60e51b815260040180806020018281038252602e815260200180612425602e913960400191505060405180910390fd5b600054610100900460ff16158015611ea7576000805460ff1961ff0019909116610100171660011790555b8251602080850191909120835191840191909120606591909155606655801561151d576000805461ff0019169055505050565b600054610100900460ff1680611ef35750611ef3611385565b80611f01575060005460ff16155b611f3c5760405162461bcd60e51b815260040180806020018281038252602e815260200180612425602e913960400191505060405180910390fd5b600054610100900460ff16158015611f67576000805460ff1961ff0019909116610100171660011790555b6040518060526123d38239604051908190036052019020609a55508015610e2c576000805461ff00191690555050565b600054610100900460ff1680611fb05750611fb0611385565b80611fbe575060005460ff16155b611ff95760405162461bcd60e51b815260040180806020018281038252602e815260200180612425602e913960400191505060405180910390fd5b600054610100900460ff16158015612024576000805460ff1961ff0019909116610100171660011790555b825161203790603690602086019061228b565b50815161204b90603790602085019061228b565b506038805460ff19166012179055801561151d576000805461ff0019169055505050565b600081602001835110156120bf576040805162461bcd60e51b815260206004820152601260248201527152656164206f7574206f6620626f756e647360701b604482015290519081900360640190fd5b50016020015190565b60408051818152606081810183529182919060208201818036833701905050905060005b602081101561219057600084826020811061210357fe5b1a60f881811b9250601080830480831b9360ff9091169091029003901b61212982612256565b85856002028151811061213857fe5b60200101906001600160f81b031916908160001a90535061215881612256565b85856002026001018151811061216a57fe5b60200101906001600160f81b031916908160001a90535050600190920191506120ec9050565b5092915050565b60655490565b60665490565b60008383836121b0612287565b6040805160208082019690965280820194909452606084019290925260808301523060a0808401919091528151808403909101815260c090920190528051910120949350505050565b600082821115612250576040805162461bcd60e51b815260206004820152601e60248201527f536166654d6174683a207375627472616374696f6e206f766572666c6f770000604482015290519081900360640190fd5b50900390565b6000600a60f883901c1015612276578160f81c60300160f81b9050610dcb565b8160f81c60570160f81b9050610dcb565b4690565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106122cc57805160ff19168380011785556122f9565b828001600101855582156122f9579182015b828111156122f95782518255916020019190600101906122de565b50612305929150612309565b5090565b6107fc91905b80821115612305576000815560010161230f56fe45524332303a207472616e7366657220746f20746865207a65726f206164647265737345524332303a206275726e20616d6f756e7420657863656564732062616c616e636545524332303a20617070726f766520746f20746865207a65726f206164647265737345524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e636545434453413a20696e76616c6964207369676e6174757265202773272076616c75655065726d69742861646472657373206f776e65722c61646472657373207370656e6465722c75696e743235362076616c75652c75696e74323536206e6f6e63652c75696e7432353620646561646c696e6529496e697469616c697a61626c653a20636f6e747261637420697320616c726561647920696e697469616c697a656445434453413a20696e76616c6964207369676e6174757265202776272076616c7565454950373132446f6d61696e28737472696e67206e616d652c737472696e672076657273696f6e2c75696e7432353620636861696e49642c6164647265737320766572696679696e67436f6e74726163742945524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e6365ddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef45524332303a206275726e2066726f6d20746865207a65726f206164647265737345524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f206164647265737345524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa2646970667358221220ff9c4830e324f799f1cd801186535686ff497289255f43e51a6534b726aab04964736f6c634300060b0033'
