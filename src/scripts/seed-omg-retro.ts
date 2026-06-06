import type { ExecArgs } from "@medusajs/types"
import { ContainerRegistrationKeys, Modules } from "@medusajs/utils"

type AnyService = Record<string, any>

export default async function seedOmgRetro({ container }: ExecArgs) {
  const logger = container.resolve(ContainerRegistrationKeys.LOGGER) as AnyService

  logger.info("Starting OMG Retro seed...")

  const remoteLink = container.resolve(ContainerRegistrationKeys.REMOTE_LINK)
  const query = container.resolve(ContainerRegistrationKeys.QUERY)

  const regionModuleService = container.resolve(Modules.REGION) as AnyService
  const productModuleService = container.resolve(Modules.PRODUCT) as AnyService
  const pricingModuleService = container.resolve(Modules.PRICING) as AnyService
  const inventoryModuleService = container.resolve(Modules.INVENTORY) as AnyService

  void remoteLink
  void query
  void pricingModuleService
  void inventoryModuleService

  try {
    logger.info("Creating regions...")

    const usRegion = await regionModuleService.createRegions({
      name: "United States",
      currency_code: "usd",
      countries: ["us"],
    })

    logger.info("US region created")

    const caRegion = await regionModuleService.createRegions({
      name: "Canada",
      currency_code: "cad",
      countries: ["ca"],
    })

    logger.info("Canada region created")
    void usRegion
    void caRegion

    logger.info("Creating product categories...")

    const nintendo = await productModuleService.createProductCategories({
      name: "Nintendo",
      handle: "nintendo",
      is_active: true,
    })

    const n64 = await productModuleService.createProductCategories({
      name: "Nintendo 64",
      handle: "nintendo-64",
      parent_category_id: nintendo.id,
      is_active: true,
    })

    const snes = await productModuleService.createProductCategories({
      name: "Super Nintendo",
      handle: "super-nintendo",
      parent_category_id: nintendo.id,
      is_active: true,
    })

    const gba = await productModuleService.createProductCategories({
      name: "Game Boy Advance",
      handle: "game-boy-advance",
      parent_category_id: nintendo.id,
      is_active: true,
    })

    const playstation = await productModuleService.createProductCategories({
      name: "PlayStation",
      handle: "playstation",
      is_active: true,
    })

    const ps1 = await productModuleService.createProductCategories({
      name: "PlayStation 1",
      handle: "playstation-1",
      parent_category_id: playstation.id,
      is_active: true,
    })

    const ps2 = await productModuleService.createProductCategories({
      name: "PlayStation 2",
      handle: "playstation-2",
      parent_category_id: playstation.id,
      is_active: true,
    })

    const xbox = await productModuleService.createProductCategories({
      name: "Xbox",
      handle: "xbox",
      is_active: true,
    })

    const originalXbox = await productModuleService.createProductCategories({
      name: "Original Xbox",
      handle: "original-xbox",
      parent_category_id: xbox.id,
      is_active: true,
    })

    const sega = await productModuleService.createProductCategories({
      name: "Sega",
      handle: "sega",
      is_active: true,
    })

    const dreamcast = await productModuleService.createProductCategories({
      name: "Dreamcast",
      handle: "dreamcast",
      parent_category_id: sega.id,
      is_active: true,
    })

    logger.info("Categories created")

    logger.info("Creating products...")

    await productModuleService.createProducts({
      title: "The Legend of Zelda: Ocarina of Time",
      handle: "the-legend-of-zelda-ocarina-of-time",
      status: "published",
      category_ids: [n64.id],
      metadata: {
        platform: "n64",
        coverColor: "#8B6914",
        systemCode: "N64",
      },
      options: [{ title: "Condition", values: ["CIB", "Loose"] }],
      variants: [
        {
          title: "CIB",
          sku: "ZELDA-OOT-N64-CIB",
          options: { Condition: "CIB" },
          manage_inventory: true,
        },
        {
          title: "Loose",
          sku: "ZELDA-OOT-N64-LOOSE",
          options: { Condition: "Loose" },
          manage_inventory: true,
        },
      ],
    })

    logger.info("Zelda created")

    await productModuleService.createProducts({
      title: "Pokémon Emerald Version",
      handle: "pokemon-emerald-version",
      status: "published",
      category_ids: [gba.id],
      metadata: {
        platform: "gba",
        coverColor: "#2D5A1B",
        systemCode: "GBA",
      },
      options: [{ title: "Condition", values: ["Loose"] }],
      variants: [
        {
          title: "Loose",
          sku: "POKEMON-EMERALD-GBA-LOOSE",
          options: { Condition: "Loose" },
          manage_inventory: true,
        },
      ],
    })

    logger.info("Pokemon Emerald created")

    await productModuleService.createProducts({
      title: "Super Mario 64",
      handle: "super-mario-64",
      status: "published",
      category_ids: [n64.id],
      metadata: {
        platform: "n64",
        coverColor: "#CC1E1E",
        systemCode: "N64",
      },
      options: [{ title: "Condition", values: ["CIB", "Loose"] }],
      variants: [
        {
          title: "CIB",
          sku: "SUPER-MARIO-64-N64-CIB",
          options: { Condition: "CIB" },
          manage_inventory: true,
        },
        {
          title: "Loose",
          sku: "SUPER-MARIO-64-N64-LOOSE",
          options: { Condition: "Loose" },
          manage_inventory: true,
        },
      ],
    })

    logger.info("Super Mario 64 created")

    await productModuleService.createProducts({
      title: "Final Fantasy VII",
      handle: "final-fantasy-vii",
      status: "published",
      category_ids: [ps1.id],
      metadata: {
        platform: "ps1",
        coverColor: "#1A1A2E",
        systemCode: "PS1",
      },
      options: [{ title: "Condition", values: ["CIB", "Loose"] }],
      variants: [
        {
          title: "CIB",
          sku: "FF7-PS1-CIB",
          options: { Condition: "CIB" },
          manage_inventory: true,
        },
        {
          title: "Loose",
          sku: "FF7-PS1-LOOSE",
          options: { Condition: "Loose" },
          manage_inventory: true,
        },
      ],
    })

    logger.info("Final Fantasy VII created")

    await productModuleService.createProducts({
      title: "Metal Gear Solid 2: Sons of Liberty",
      handle: "metal-gear-solid-2-sons-of-liberty",
      status: "published",
      category_ids: [ps2.id],
      metadata: {
        platform: "ps2",
        coverColor: "#0D1117",
        systemCode: "PS2",
      },
      options: [{ title: "Condition", values: ["CIB", "Loose"] }],
      variants: [
        {
          title: "CIB",
          sku: "MGS2-PS2-CIB",
          options: { Condition: "CIB" },
          manage_inventory: true,
        },
        {
          title: "Loose",
          sku: "MGS2-PS2-LOOSE",
          options: { Condition: "Loose" },
          manage_inventory: true,
        },
      ],
    })

    logger.info("MGS2 created")

    await productModuleService.createProducts({
      title: "Halo: Combat Evolved",
      handle: "halo-combat-evolved",
      status: "published",
      category_ids: [originalXbox.id],
      metadata: {
        platform: "xbox",
        coverColor: "#107C10",
        systemCode: "Xbox",
      },
      options: [{ title: "Condition", values: ["CIB", "Loose"] }],
      variants: [
        {
          title: "CIB",
          sku: "HALO-CE-XBOX-CIB",
          options: { Condition: "CIB" },
          manage_inventory: true,
        },
        {
          title: "Loose",
          sku: "HALO-CE-XBOX-LOOSE",
          options: { Condition: "Loose" },
          manage_inventory: true,
        },
      ],
    })

    logger.info("Halo created")

    await productModuleService.createProducts({
      title: "Sonic Adventure 2",
      handle: "sonic-adventure-2",
      status: "published",
      category_ids: [dreamcast.id],
      metadata: {
        platform: "dreamcast",
        coverColor: "#003087",
        systemCode: "DC",
      },
      options: [{ title: "Condition", values: ["CIB", "Loose"] }],
      variants: [
        {
          title: "CIB",
          sku: "SONIC-ADV2-DC-CIB",
          options: { Condition: "CIB" },
          manage_inventory: true,
        },
        {
          title: "Loose",
          sku: "SONIC-ADV2-DC-LOOSE",
          options: { Condition: "Loose" },
          manage_inventory: true,
        },
      ],
    })

    logger.info("Sonic Adventure 2 created")

    await productModuleService.createProducts({
      title: "Chrono Trigger",
      handle: "chrono-trigger",
      status: "published",
      category_ids: [snes.id],
      metadata: {
        platform: "snes",
        coverColor: "#6B3A8E",
        systemCode: "SNES",
      },
      options: [{ title: "Condition", values: ["Loose"] }],
      variants: [
        {
          title: "Loose",
          sku: "CHRONO-TRIGGER-SNES-LOOSE",
          options: { Condition: "Loose" },
          manage_inventory: true,
        },
      ],
    })

    logger.info("Chrono Trigger created")

    logger.info("OMG Retro seed completed successfully!")
    logger.info("Created: 2 regions, 11 categories, 8 products")
  } catch (error) {
    logger.error("Seed failed:", error)
    throw error
  }
}
