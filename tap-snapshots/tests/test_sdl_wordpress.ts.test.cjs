/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`tests/test_sdl_wordpress.ts TAP SDL: Wordpress Deployment Groups > Groups matches expected result 1`] = `
Array [
  Object {
    "name": "akash",
    "requirements": Object {
      "attributes": Array [],
      "signedBy": Object {
        "allOf": Array [],
        "anyOf": Array [
          "akash1365yvmc4s7awdyj3n2sav7xfx76adc6dnmlx63",
          "akash18qa2a2ltfyvkyj0ggj3hkvuj6twzyumuaru9s4",
        ],
      },
    },
    "resources": Array [
      Object {
        "count": 1,
        "price": Object {
          "amount": "10000",
          "denom": "uakt",
        },
        "resource": Object {
          "cpu": Object {
            "attributes": undefined,
            "units": Object {
              "val": Uint8Array [
                49,
                48,
                48,
                48,
              ],
            },
          },
          "endpoints": Array [],
          "gpu": Object {
            "attributes": undefined,
            "units": Object {
              "val": Uint8Array [
                48,
              ],
            },
          },
          "id": 1,
          "memory": Object {
            "attributes": undefined,
            "quantity": Object {
              "val": Uint8Array [
                49,
                48,
                55,
                51,
                55,
                52,
                49,
                56,
                50,
                52,
              ],
            },
          },
          "storage": Array [
            Object {
              "attributes": undefined,
              "name": "default",
              "quantity": Object {
                "val": Uint8Array [
                  49,
                  48,
                  55,
                  51,
                  55,
                  52,
                  49,
                  56,
                  50,
                  52,
                ],
              },
            },
            Object {
              "attributes": Array [
                Object {
                  "key": "class",
                  "value": "beta3",
                },
                Object {
                  "key": "persistent",
                  "value": "true",
                },
              ],
              "name": "wordpress-db",
              "quantity": Object {
                "val": Uint8Array [
                  56,
                  53,
                  56,
                  57,
                  57,
                  51,
                  52,
                  53,
                  57,
                  50,
                ],
              },
            },
          ],
        },
      },
      Object {
        "count": 1,
        "price": Object {
          "amount": "10000",
          "denom": "uakt",
        },
        "resource": Object {
          "cpu": Object {
            "attributes": undefined,
            "units": Object {
              "val": Uint8Array [
                52,
                48,
                48,
                48,
              ],
            },
          },
          "endpoints": Array [
            Object {
              "sequence_number": 0,
            },
          ],
          "gpu": Object {
            "attributes": undefined,
            "units": Object {
              "val": Uint8Array [
                48,
              ],
            },
          },
          "id": 2,
          "memory": Object {
            "attributes": undefined,
            "quantity": Object {
              "val": Uint8Array [
                52,
                50,
                57,
                52,
                57,
                54,
                55,
                50,
                57,
                54,
              ],
            },
          },
          "storage": Array [
            Object {
              "attributes": undefined,
              "name": "default",
              "quantity": Object {
                "val": Uint8Array [
                  52,
                  50,
                  57,
                  52,
                  57,
                  54,
                  55,
                  50,
                  57,
                  54,
                ],
              },
            },
            Object {
              "attributes": Array [
                Object {
                  "key": "class",
                  "value": "beta3",
                },
                Object {
                  "key": "persistent",
                  "value": "true",
                },
              ],
              "name": "wordpress-data",
              "quantity": Object {
                "val": Uint8Array [
                  51,
                  52,
                  51,
                  53,
                  57,
                  55,
                  51,
                  56,
                  51,
                  54,
                  56,
                ],
              },
            },
          ],
        },
      },
    ],
  },
]
`

exports[`tests/test_sdl_wordpress.ts TAP SDL: Wordpress Version > Manifest version matches expected result 1`] = `
Uint8Array [
  41,
  59,
  109,
  246,
  224,
  47,
  134,
  151,
  175,
  212,
  39,
  166,
  185,
  123,
  9,
  234,
  39,
  45,
  57,
  28,
  107,
  76,
  26,
  88,
  129,
  224,
  141,
  178,
  188,
  237,
  211,
  251,
]
`
