import withAudio from "./with-audio.js";

const Player = (props) => {
  const {onPlayButtonClick, children} = props;

  return (
    <div>
      <button onClick={onPlayButtonClick} />
      {children}
    </div>
  );
};

Player.propTypes = {
  onPlayButtonClick: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};

describe(`WithAudio`, () => {
  it(`should turn on audio (play) by HOC's callback `, () => {
    const PlayerWrapped = withAudio(Player);

    const wrapper = Enzyme.mount(
        <PlayerWrapped
          isPlaying={false}
          onPlayButtonClick={() => {}}
          src=""
        />
    );

    window.HTMLMediaElement.prototype.play = () => {};

    const {_audioRef} = wrapper.instance();

    jest.spyOn(_audioRef.current, `play`);

    wrapper.instance().componentDidMount();

    wrapper.find(`button`).simulate(`click`);

    expect(_audioRef.current.play).toHaveBeenCalledTimes(1);
  });

  it(`should turn off audio (pause) by HOC's callback `, () => {
    const PlayerWrapped = withAudio(Player);
    const wrapper = Enzyme.mount(
        <PlayerWrapped
          isPlaying={true}
          onPlayButtonClick={() => {}}
          src=""
        />
    );

    window.HTMLMediaElement.prototype.pause = () => {};

    const {_audioRef} = wrapper.instance();

    jest.spyOn(_audioRef.current, `pause`);

    wrapper.instance().componentDidMount();

    wrapper.find(`button`).simulate(`click`);

    expect(_audioRef.current.pause).toHaveBeenCalledTimes(1);
  });
});
