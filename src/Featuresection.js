/* This example requires Tailwind CSS v2.0+ */
// import { AnnotationIcon, GlobeAltIcon, LightningBoltIcon, ScaleIcon } from '@heroicons/react/outline';
import {ReactComponent as GenrealImg} from '../src/assets/generalImg.svg'
import {ReactComponent as DiabetesImg} from '../src/assets/diabetes_measureImg.svg'
import {ReactComponent as PneumoniaImg} from '../src/assets/pneumoniaImg.svg'
import {ReactComponent as HeartImg} from '../src/assets/heartImg.svg'
import {ReactComponent as LiverImg} from '../src/assets/liverImg.svg'
import {ReactComponent as KidneyImg} from '../src/assets/kidneysImg.svg'
// import { ReactComponent as YourSvg } from './your-svg.svg';

const features = [
  {
    name: 'General Disease Prediction',
    description:
      'Having common sysmptoms? select "General Disease" from above and know the disease you have from most common 41 diseases.',
    icon: GenrealImg,
  },
  {
    name: 'Diabetes Prediction',
    description:
      'Want to know your diabetes status then choose "Diabetes" from above section.',
    icon: DiabetesImg,
  },
  {
    name: 'Pneumonia Prediction',
    description:
      'Having trouble breathing? get your x-ray verified by choosing "Pneumonia" from above section.',
    icon: PneumoniaImg,
  },
  {
    name: 'Heart Disease Prediction',
    description:
      'Is there a problem in your heart?, then choose "Heart" from above section and get yourself check.',
    icon: HeartImg,
  },
  {
    name: 'Liver Disease Prediction',
    description:
      'Recently diagnosed with liver disease? know your liver health status by choosing "Liver" from above section.',
    icon: LiverImg,
  },
  {
    name: 'Kidney Disease Prediction',
    description:
      'Having family history of kidney problem? select "Kidney" from above section and know the health status of your kidney.',
    icon: KidneyImg,
  },
]

export default function Example() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            A better way towards health
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
          Changing the healthcare system using AI to be more flexible for Doctors and Patients
          in terms of saving life.
          </p>
        </div>

        <div className="mt-14">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-white text-white">
                    <feature.icon className="h-12 w-12" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
