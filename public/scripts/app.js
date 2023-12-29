const DATA_ELEMENT_ATTR = `data-element`

function main() {
  console.log(`fn: main`)

  generateAstroMd()
}

function generateAstroMd() {
  console.log(`fn: generateAstroMd`)

  const preEl = document.querySelector(`[${DATA_ELEMENT_ATTR}="pre"]`)

  if (!preEl) {
    console.error(`No pre element found`)
    return
  }

  let html = ``
  projects.forEach(
    ({ title, date, image, demoLink, repoLink, challengeLink }) => {
      html += `
        ---
        title: "${title}"
        date: "${date}"
        images: [{ src: "${image}", alt: "${title}" }]
        links: [
            { label: "Demo", href: "${demoLink}" },
            { label: "Repo", href: "${repoLink}" },
            { label: "Challenge", href: "${challengeLink}" },
        ]
        ---
        `
    }
  )

  preEl.innerHTML = html
}

document.addEventListener("DOMContentLoaded", main)
