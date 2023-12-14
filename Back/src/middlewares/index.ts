import { emailExists } from "./emailExists.middleware" 
import { handleErrors } from "./handleErros.middleware"
import { telephoneExists } from "./telephoneExists.middleware"
import { validateBody } from "./validateBody.middleware"
import { idUserExists } from "./idUserExists.middleware"
import { validateUserPermission } from "./validateUserPermission.middleware"
import { validateToken } from "./validateToken.middleware"
import { idContactExists } from "./idContactExists.middleware"

export default {
    emailExists,
    handleErrors,
    telephoneExists,
    validateBody,
    idUserExists,
    validateUserPermission,
    validateToken,
    idContactExists,
}