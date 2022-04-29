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
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: GenrealImg,
  },
  {
    name: 'Diabetes Prediction',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: DiabetesImg,
  },
  {
    name: 'Pneumonia Prediction',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: PneumoniaImg,
  },
  {
    name: 'Heart Disease Prediction',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: HeartImg,
  },
  {
    name: 'Liver Disease Prediction',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: LiverImg,
  },
  {
    name: 'Kidney Disease Prediction',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
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
            Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in
            accusamus quisquam.
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
