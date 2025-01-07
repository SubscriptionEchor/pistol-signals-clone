import { DashboardLayout } from '../dashboard/layout';
import { ScreenerHeader } from './components/screener-header';
import { ScreenerFilters } from './components/screener-filters';
import { ScreenerTable } from './components/screener-table';
import { ScreenerPagination } from './components/screener-pagination';
import { useScreenerData } from './hooks/useScreenerData';

export function Screener() {
  const { 
    data, 
    filters, 
    setFilters, 
    toggleFavorite, 
    totalPages,
    resetThresholds,
    isScreenerActive,
    toggleScreener
  } = useScreenerData();

  const handleThresholdChange = (interval: string, threshold: number) => {
    setFilters(prev => ({
      ...prev,
      thresholds: {
        ...prev.thresholds,
        [interval]: threshold
      }
    }));
  };

  return (
    <DashboardLayout>
      <div className="min-h-screen bg-[#0A0A0A] text-white">
        <div className="p-8">
          <ScreenerHeader />
          
          <ScreenerFilters
            timeInterval={filters.timeInterval}
            thresholds={filters.thresholds}
            onTimeIntervalChange={(interval) => setFilters({ ...filters, timeInterval: interval })}
            onThresholdChange={handleThresholdChange}
            onToggleFavorites={() => setFilters({ ...filters, onlyFavorites: !filters.onlyFavorites })}
            onResetThresholds={resetThresholds}
            showFavorites={filters.onlyFavorites}
            onStartScreener={toggleScreener}
            isScreenerActive={isScreenerActive}
          />

          {isScreenerActive && (
            <>
              <ScreenerTable
                data={data}
                timeInterval={filters.timeInterval}
                onToggleFavorite={toggleFavorite}
              />

              <ScreenerPagination
                currentPage={filters.page}
                totalPages={totalPages}
                onPageChange={(page) => setFilters({ ...filters, page })}
              />
            </>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
}