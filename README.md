# Sapphire Read Truffle Example

## Install

yarn

## Deploy

yarn run truffle migrate --network sapphire

```
sapphire-read > yarn run truffle migrate --network sapphire
yarn run v1.22.17

Compiling your contracts...
===========================
> Everything is up to date, there is nothing to compile.


Starting migrations...
======================
> Network name:    'sapphire'
> Network id:      23295
> Block gas limit: 30000000 (0x1c9c380)


1_deploy_contracts.js
=====================

   Deploying 'MetaCoin'
   --------------------
   > transaction hash:    0x06d2e79e9967150487f095e14c77eebbb698078c575d1fffca27ea46c8161469
   > Blocks: 1            Seconds: 4
   > contract address:    0x48594e6f18BcB8fdB50Be8B5e7678cbA4A1262A7
   > block number:        4858
   > block timestamp:     1664391362
   > account:             0xe9EB72519D543a0D080450582235ee84c757FE95
   > balance:             9.997453
   > gas used:            115690 (0x1c3ea)
   > gas price:           100 gwei
   > value sent:          0 ETH
   > total cost:          0.011569 ETH

   > Saving artifacts
   -------------------------------------
   > Total cost:            0.011569 ETH

Summary
=======
> Total deployments:   1
> Final cost:          0.011569 ETH


✨  Done in 11.30s.
```

Explorer says

```
[Contract  0x6f6e63654f00000000000012f900000000000000  created]
```

## Test with truffle 👍

`yarn run truffle exec --network sapphire test/metacoin-truffle.js`

## Test with ethers 👎

`node test/metacoin-ethers.js`