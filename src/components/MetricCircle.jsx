export function MetricCircle({ stats }) {
  return (
    <div className="metric-circle">
      <div className="metric-ring" aria-hidden="true" />
      <div className="metric stat-top">
        <strong>{stats.customers}</strong>
        <span>Customers</span>
      </div>
      <div className="metric stat-left">
        <strong>{stats.cities}</strong>
        <span>Cities</span>
      </div>
      <div className="metric stat-right">
        <strong>{stats.countries}</strong>
        <span>Countries</span>
      </div>
    </div>
  );
}
