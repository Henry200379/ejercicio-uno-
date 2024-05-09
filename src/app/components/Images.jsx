import España from '../../../public/España.png'
import Francia from '../../../public/Francia.png'
import Inglaterra from '../../../public/Inglaterra.png'


export const images = [España, Francia, Inglaterra]

const imageByIndex = (index) => images[index % images.length]

export default imageByIndex