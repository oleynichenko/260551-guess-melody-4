import AudioPlayer from "@components/audio-player/audio-player";

describe(`AudioPlayer`, () => {
  it(`should stop playing when first click button and continue on second`, () => {
    const player = Enzyme.shallow(
        <AudioPlayer
          isPlaying={false}
          onPlayButtonClick={() => {}}
          src={`path`}
        />
    );

    const btn = player.find(`.track__button`);

    btn.simulate(`click`);
    expect(btn.classes).toContain(`track__button--play`);

    btn.simulate(`click`);
    expect(btn.classes).toContain(`track__button--pause`);
  });
});
