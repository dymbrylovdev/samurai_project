import React from "react";
import Module2 from "./ProfileInfo.module.css";

function ProfileInfo(q) {
  return (
    <div>
      <div className={Module2.profile}>
        <div className={Module2.profile_content}>
          <div className={Module2.content__ava}>
            <div className={Module2.conteiner__img}>
              <img
                  className={Module2.fone__img}
                  src="https://sun9-72.userapi.com/impg/byaVBtmFpK3Qe3Eq_mglDRMmff7Yv4GVIaZsSQ/-LL6oM7rEzc.jpg?size=1080x719&quality=96&sign=68ad61109d723a78c9734a4caad7b161&type=album" alt="Avatar"
              />
            </div>
          </div>
          <div className={Module2.content__infoUser}>
            <div className={Module2.age}>Возраст: {q.age} лет</div>
            <div className={Module2.birthday}>Год рождения: {q.birthday}.г</div>
            <div className={Module2.city}>Город: {q.city}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileInfo;
