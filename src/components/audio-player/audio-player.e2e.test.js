import AudioPlayer from "@components/audio-player/audio-player";

describe(`AudioPlayer`, () => {
  it(`Click by Play button calls callback`, () => {
    const handlePlayButtonClick = jest.fn();

    const player = Enzyme.shallow(
        <AudioPlayer
          isPlaying={false}
          onPlayButtonClick={handlePlayButtonClick}
          src={`path`}
        />
    );

    player.find(`.track__button`).simulate(`click`);

    expect(handlePlayButtonClick.mock.calls.length).toEqual(1);
  });
});
