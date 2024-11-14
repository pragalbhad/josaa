import React, { useEffect, useState } from 'react';
import './ToggleButton.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getRecommendedCollege } from '../../redux/actions/getRecommendationAction';
import GlobalLoader from '../GloaderLoader';

const ToggleButton = () => {

  const dispatch = useDispatch();
  const { recommendations, loadingStateForRecommendation } = useSelector(
    (state) => state.recommendationReducer
  );
  console.log('%cMyProject%cline:10%cloadingStateForRecommendation', 'color:#fff;background:#ee6f57;padding:3px;border-radius:2px', 'color:#fff;background:#1f3c88;padding:3px;border-radius:2px', 'color:#fff;background:rgb(3, 22, 52);padding:3px;border-radius:2px', loadingStateForRecommendation);

  const [active, setActive] = useState('MAINS');

  const { recommendedColleges, error } = useSelector((state) => state.recommendedCollegeReducer);

  useEffect(() => {

    if (recommendations.data) {
      let payload = recommendations.data.find((i) => i.exam_name === active)
      if (payload) {
        const filteredPayload = {
          exam: payload.exam_name,
          gender: payload.gender,
          rank: payload.rank,
          seat: payload.seat,
          state: payload.state,
          year: payload.year,
        };
        dispatch(getRecommendedCollege(filteredPayload));
      }
    }

  }, [active, dispatch, recommendations.data])

  const handleToggle = (option) => {
    setActive(option);
  };

  return (
    <div className="toggle-button">
      {recommendations && recommendations?.data?.map((examName) => (
        <button
          className={active === examName.exam_name ? 'active' : ''}
          onClick={() => handleToggle(examName.exam_name)}
        >
          {examName.exam_name}&nbsp;({examName.year})
        </button>
      ))}
      {/* <button
        className={active === 'MAINS' ? 'active' : ''}
        onClick={() => handleToggle('MAINS')}
      >
        MAINS (2024)
      </button>
      <button
        className={active === 'ADVANCE' ? 'active' : ''}
        onClick={() => handleToggle('ADVANCE')}
      >
        ADVANCE (2024)
      </button> */}
      {loadingStateForRecommendation && <GlobalLoader />}
    </div>
  );
};

export default ToggleButton;
