"use client"

import { useEffect } from "react"

/**
 * Suppresses hydration warnings caused by browser extensions
 * that inject attributes into the DOM before React hydrates.
 */
export function HydrationSuppressor() {
  useEffect(() => {
    // Clean up browser extension attributes that cause hydration mismatches
    const body = document.body
    const attributesToRemove: string[] = []

    for (const attr of body.attributes) {
      if (
        attr.name.startsWith("__processed_") ||
        attr.name === "bis_status" ||
        attr.name.startsWith("bis_")
      ) {
        attributesToRemove.push(attr.name)
      }
    }

    attributesToRemove.forEach((attr) => body.removeAttribute(attr))
  }, [])

  return null
}
