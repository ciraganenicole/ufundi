import ReCAPTCHA from 'react-google-recaptcha';

export const Recaptcha: React.FC<{ onChange: any }> = (props) => {
  function onChange(value: any) {
    console.log('Captcha value:', value);
    props.onChange(!!value);
  }
  return (
    <div
      className="absolute z-[100000] flex size-full items-center justify-center bg-black/50 "
      onClick={() => {
        onChange(null);
      }}
    >
      <ReCAPTCHA
        sitekey={'6LfizL8pAAAAAKRf2feLhptrTu39ma_m0Ppx4vYP'}
        onChange={onChange}
        onError={() => onChange(null)}
        onAbort={() => onChange(null)}
      />
    </div>
  );
};
