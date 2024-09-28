import { ValidatorConfig, Validator } from "../../../../content/common/types/specificationTypes";
import { SubmitForm } from "../../../types/submitMusicFormTypes";
import { isBandNameValid, isContactNameValid, isEveryAlbumNameValid, isEveryAlbumPhotoPresent, isEverySongNameValid, isEverySongFilePresent, isAtLeastOneSongInEveryAlbum, isEmailValid, isPhoneValid } from "../specifications/musicFormSpecifications";

const validatorConfig: ValidatorConfig<SubmitForm> ={
    config: [{
        id: 1,
        specification: isBandNameValid,
        validationMessage: 'Band name is required'
    },
    {
        id: 2,
        specification: isContactNameValid,
        validationMessage: 'Contact name is invalid'
    },
    {
        id: 3,
        specification: isEmailValid,
        validationMessage: 'Email address is invalid'
    },
    {
        id: 4,
        specification: isPhoneValid,
        validationMessage: 'Phone number is invalid'
    },
    {
        id: 5,
        specification: isEveryAlbumNameValid,
        validationMessage: 'Album names required for each album'
    },
    {
        id: 6,
        specification: isEveryAlbumPhotoPresent,
        validationMessage: 'Photo is reqired for each album'
    },
    {
        id: 7,
        specification: isEverySongNameValid,
        validationMessage: 'Song name is required for each song'
    },
    {
        id: 8,
        specification: isEverySongFilePresent,
        validationMessage: 'Mp3 is required for each song'
    },
    {
        id: 9,
        specification: isAtLeastOneSongInEveryAlbum,
        validationMessage: 'Every album must have at least one song'
    }]
}

export const SubmitMusicValidator: Validator<SubmitForm> = {
    isValid: async (form: SubmitForm) => {
        let validationMessages: string[] = [];
        await validatorConfig.config.forEach(async (item) => {
            if (!(await item.specification.isSatisfiedBy(form))) {
                validationMessages = [...validationMessages, item.validationMessage ];
            }
        })
        return { isValid: validationMessages.length === 0, validationMessages };
    }
}

export default SubmitMusicValidator;