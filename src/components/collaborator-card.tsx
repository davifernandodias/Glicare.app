import { Button } from '@ui/button';
import { LinkedinIconSvg } from '@svg/linkedin-icon-svg';

export const CollaboratorCard = () => {
  return (
    <div className="bg-gray-ga-500 rounded-4xl p-6 max-w-2xs">
      <div className="bg-gray-ga rounded-full w-16 h-16 my-1">
        <img src="" alt="" />
      </div>
      <h3 className="headline-large-ga text-blue-ga-800">Jane Doe</h3>
      <h4 className="title-medium-ga">Developer</h4>
      <p className="body-small-ga my-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
        sapiente quidem sequi mollitia labore cumque incidunt, aliquid tempore
        deleniti, consequatur vero asperiores amet id non quasi eveniet
        quibusdam magnam impedit!
      </p>
      <Button width={24} icon={<LinkedinIconSvg />} label="Linkedin" />
    </div>
  );
};
