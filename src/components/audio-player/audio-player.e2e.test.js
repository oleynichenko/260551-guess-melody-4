import AudioPlayer from "@components/audio-player/audio-player";

describe(`AudioPlayer`, () => {
  it(`Click by Play button calls callback`, () => {
    const handlePlayButtonClick = jest.fn();

    const player = Enzyme.shallow(
        <AudioPlayer
          isLoading={false}
          isPlaying={false}
          onPlayButtonClick={handlePlayButtonClick}
          src={`path`}>
          <audio />
        </AudioPlayer>
    );

    player.find(`.track__button`).simulate(`click`);

    expect(handlePlayButtonClick.mock.calls.length).toEqual(1);
  });
});
