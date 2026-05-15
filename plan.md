## Plan: Integrate New Brand Image

**Goal:** Integrate the specific image provided by the user into the Garfe Coffee website while maintaining the existing warm aesthetic and functionality.

**Target Image URL:** `https://storage.googleapis.com/dala-prod-public-storage/dala-video/references/8125c7aa-d9dd-4e40-b993-5621fdf4e946/1778502193554_692699b7_4_2.jpg`

**Steps:**
1.  **Analyze current components:** Identify the best location for the new image. `src/components/AboutSection.tsx` is ideal for brand-level imagery.
2.  **Modify `AboutSection.tsx`:** Update the layout to accommodate two images instead of one. Use a staggered or grid layout to showcase both the existing heritage image and the new process/brand image.
3.  **Ensure theme consistency:** Maintain the warm color palette (#D4A373, #4B2C20, etc.) and minimalist design.
4.  **Verify build:** Run `validate_build` to ensure no issues.

**Layout Change in AboutSection:**
- Current: Single large image on the right.
- New: A composite layout with the new image as the primary focus and the existing image as a supporting "heritage" piece, or a side-by-side arrangement that fits the warm, premium aesthetic.
