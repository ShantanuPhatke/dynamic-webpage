const DYNAMIC_CONTENT = {
  selector: "#dynamic-data",
  text: "This is a generic heading from NextJS server!",
}

const DYNAMIC_BUTTON = {
  selector: "#dynamic-button",
  text: "Generic button!",
}

const STYLES_LINKEDIN = {
  selector: "#dynamic-data",
  css: "color: #0077b5",
}
const STYLES_LINKEDIN_BUTTON = {
  selector: "#dynamic-button",
  css: "color: #ffffff; background: #0077b5",
}

const STYLES_FACEBOOK = {
  selector: "#dynamic-data",
  css: "color: #4267B2",
}
const STYLES_FACEBOOK_BUTTON = {
  selector: "#dynamic-button",
  css: "color: #ffffff; background: #4267B2",
}

const STYLES_INSTAGRAM = {
  selector: "#dynamic-data",
  css: "color: #C13584",
}
const STYLES_INSTAGRAM_BUTTON = {
  selector: "#dynamic-button",
  css: "color: #ffffff; background: #C13584",
}

const STYLES_WHATSAPP = {
  selector: "#dynamic-data",
  css: "color: #128C7E",
}
const STYLES_WHATSAPP_BUTTON = {
  selector: "#dynamic-button",
  css: "color: #ffffff; background: #128C7E",
}

export default function handler(req, res) {
  if (req.method === "GET") res.status(200).json({ health: "Ok" })

  if (req.method === "POST") {
    if (req.body.utm_campaign === "generic") {
      switch (req.body.utm_source) {
        case "linkedin":
          res.status(200).json({
            elements: [DYNAMIC_CONTENT, DYNAMIC_BUTTON],
            styles: [STYLES_LINKEDIN, STYLES_LINKEDIN_BUTTON],
          })
          break
        case "facebook":
          res.status(200).json({
            elements: [DYNAMIC_CONTENT, DYNAMIC_BUTTON],
            styles: [STYLES_FACEBOOK, STYLES_FACEBOOK_BUTTON],
          })
          break
        case "instagram":
          res.status(200).json({
            elements: [DYNAMIC_CONTENT, DYNAMIC_BUTTON],
            styles: [STYLES_INSTAGRAM, STYLES_INSTAGRAM_BUTTON],
          })
          break
        case "whatsapp":
          res.status(200).json({
            elements: [DYNAMIC_CONTENT, DYNAMIC_BUTTON],
            styles: [STYLES_WHATSAPP, STYLES_WHATSAPP_BUTTON],
          })
          break

        default:
          res.status(200).json({
            elements: [DYNAMIC_CONTENT, DYNAMIC_BUTTON],
          })
          break
      }
    }
  }
  res.status(200).json(null)
}
