import { FC, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import { darkModeState } from '../../atoms/darkModeState';

import './styles.css';
import '../../stories/assets/css/animations/pulse-animation.css';

type Props = {
  title: string;
  img: string;
  id: number;
  background: string;
};

const Project: FC<Props> = ({ title, img, id, background }) => {
  const DEFAULT_SHADOW_COLOR = 'black';

  const [imgLoaded, setImgLoaded] = useState(false);
  const [projectShadowColor, setProjectShadowColor] = useState<string>(DEFAULT_SHADOW_COLOR);
  const [innerShadow, setInnerShadow] = useState<string>(DEFAULT_SHADOW_COLOR);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [darkModeLocalStorageValue, _] = useRecoilState(darkModeState);

  const handleImgLoaded = () => {
    setImgLoaded(true);
  };

  useEffect(() => {
    setProjectShadowColor(darkModeLocalStorageValue === 'dark' ? background : DEFAULT_SHADOW_COLOR);
    setInnerShadow(darkModeLocalStorageValue === 'dark' ? '#505050' : DEFAULT_SHADOW_COLOR);
  }, [background, darkModeLocalStorageValue]);

  return (
    <li
      className="project pulse-animation"
      style={
        !img
          ? {
              display: 'flex',
              alignItems: 'center',
              boxShadow: `0 0 11px ${projectShadowColor}`,
            }
          : {
              boxShadow: `0 0 11px ${projectShadowColor}`,
            }
      }
    >
      <NavLink
        to={`/project/${id}`}
        style={{
          width: 'inherit',
          maxWidth: 'inherit',
          borderRadius: 'inherit',
          boxShadow: `0 0 10px ${innerShadow} inset`,
        }}
      >
        {img && (
          <div
            className="project__container"
            style={{
              background,
            }}
          >
            <img
              src={img}
              alt={title}
              className={`project__img ${imgLoaded ? 'project__img_loaded' : ''}`}
              onLoad={handleImgLoaded}
            />
          </div>
        )}
        <h3 className="project__title">{title}</h3>
      </NavLink>
    </li>
  );
};

export default Project;
