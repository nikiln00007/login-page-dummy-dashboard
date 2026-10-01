const AlertMessage = ({ type = "error", message, onDismiss }) => {
  if (!message) return null;

  const styles = {
    error: {
      wrapper:
        "bg-red-50 border border-red-200 text-red-700",
      icon: "❌",
      iconBg: "bg-red-100",
    },
    success: {
      wrapper:
        "bg-green-50 border border-green-200 text-green-700",
      icon: "✅",
      iconBg: "bg-green-100",
    },
    info: {
      wrapper:
        "bg-blue-50 border border-blue-200 text-blue-700",
      icon: "ℹ️",
      iconBg: "bg-blue-100",
    },
  };

  const s = styles[type] || styles.error;

  return (
    <div
      className={`flex items-start gap-3 rounded-xl px-4 py-3 text-sm animate-alert ${s.wrapper}`}
      role="alert"
    >
      <span className={`flex-shrink-0 w-6 h-6 rounded-full ${s.iconBg} flex items-center justify-center text-xs`}>
        {s.icon}
      </span>
      <p className="flex-1 leading-5">{message}</p>
      {onDismiss && (
        <button
          onClick={onDismiss}
          className="flex-shrink-0 opacity-60 hover:opacity-100 transition-opacity text-lg leading-none"
          aria-label="Dismiss"
        >
          ×
        </button>
      )}
    </div>
  );
};

export default AlertMessage;
